import Intact from 'intact';
import template from './time.vdt';

export default class DatepickerTime extends Intact {
    @Intact.template()
    static template = template;

    static propTypes = {
        data: Array,
        value: Array,
        min: [String, Date],
        max: [String, Date],
        date: {
            required: true,
            type: [String, Date]
        }
    };

    defaults() {
        return {
            data: undefined,
            value: undefined,
            min: undefined,
            max: undefined,
            date: undefined,

            _value: undefined,
        };
    }

    _init() {
        this.on('$receive:value', (c, v) => {
            this.set('_value', v);
        });
        this.on('$change:_value', (c, v) => {
            if (!this._isDisabled(v)) {
                this.set('value', v);
            }
        });
    }

    _onChangeValue(index, c, v) {
        const _value = (this.get('_value') || []).slice(0);
        _value[index] = v;

        this.set('_value', _value);
    }

    _disable(index, v) {
        let value = this.get('_value').slice(0);
        value[index] = v;

        return this._isDisabled(value);
    }

    _isDisabled(value) {
        const {min, max, date} = this.get();

        value = new Date(`${date} ${value.join(':')}`);

        if (min && max) {
            return value < new Date(min) || value > new Date(max);
        } else if (min) {
            return value < new Date(min);
        } else if (max) {
            return value > new Date(max);
        }
    }

    _beforeUpdate(vNode) {
        // if component shows value on a disabled item,
        // after that the disabled item becomes enabled item,
        // we should set the value to the showed value.
        if (vNode) {
            const {_value} = this.get();
            if (!this._isDisabled(_value)) {
                this.set('value', _value);
            }
        }
    }
}
