import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            type: 'default', // primary | warning | danger
            size: 'default', // small | mini
            icon: false,
            circle: false,
            loading: false,
            disabled: false,
            fluid: false,
        };
    }

    showLoading() {
        this.set('loading', true);
    }

    hideLoading() {
        this.set('loading', false);
    }

    disable() {
        this.set('disabled', true);
    }

    enable() {
        this.set('disabled', false);
    }
}
