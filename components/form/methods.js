import {_$, isNumber} from '../utils';

function decimalPlaces(num) {
    var match = ("" + num).match(/(?:\.(\d+))?$/);
    /* istanbul ignore if */
    if (!match) {
        return 0;
    }

    // Number of digits right of decimal point.
    return match[1] ? match[1].length : 0;
}

export const methods = {
    required(value) {
        if (value == null) return false;
        if (typeof value === 'string') {
            return value.trim().length > 0;
        }
        if (Array.isArray(value)) {
            return value.length > 0;
        }
        return true;
    },

    digits(value) {
        return /^\d+$/.test(value);
    },

    email(value) {
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value); 
    },

    url(value) {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    },

    date(value) {
        return !/Invalid|NaN/.test(new Date(value).toString());
    },

    dateISO(value) {
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    },

    number(value) {
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    },

    minLength(value, item, param) {
        if (isNumber(value)) value = String(value);
        return value.length >= Number(param);
    },

    maxLength(value, item, param) {
        if (isNumber(value)) value = String(value);
        return value.length <= Number(param);
    },

    rangeLength(value, item, param) {
        if (isNumber(value)) value = String(value);
        const length = value.length;
        return length >= Number(param[0]) && length <= Number(param[1]);
    },

    min(value, item, param) {
        return Number(value) >= Number(param);
    },

    max(value, item, param) {
        return Number(value) <= Number(param);
    },

    range(value, item, param) {
        return Number(value) >= Number(param[0]) && Number(value) <= Number(param[1]);
    },

    step(value, item, param) {
        const decimals = decimalPlaces(param);
        const toInt = num => Math.round(num * Math.pow(10, decimals));

        return decimalPlaces(value) <= decimals && toInt(value) % toInt(param) === 0;
    },

    equalTo(value, item, param) {
        const equalValue = item.form.get('_context').data.get(param);
        const equalItem = item.form.getItem(param);
        if (!equalItem._hasBindEqualToCallback) {
            item._equalToCallback = () => {
                item.validateIfDirty();
            };
            equalItem.on('$changed:value', item._equalToCallback);
            equalItem._hasBindEqualToCallback = true;

            // remove listener when destroy or change rules
            ['$destroyed'/*, '$change:rules'*/].forEach(name => {
                item.on(name, () => {
                    equalItem.off('$changed:value', item._equalToCallback);
                    equalItem._hasBindEqualToCallback = false;
                });
            });
        }

        return value === equalValue;
    },
};

function count(num) {
    return num;
    // return num === 2 ? _$('???') : num;
}

export const messages = {
    required: () => _$('????????????'),
    digits: () => _$('???????????????'),
    email: () => _$('??????????????????????????????'),
    url: () => _$('????????????????????????'),
    date: () => _$('????????????????????????'),
    dateISO: () => _$('???????????????????????? (YYYY-MM-DD)'),
    number: () => _$('?????????????????????'),
    maxLength(value, item, param) {
        if (Array.isArray(value)) {
            return _$(`???????????? {n} ???`, {n: count(param)});
        } else {
            return _$(`???????????? {n} ?????????`, {n: count(param)});
        }
    },
    minLength(value, item, param) {
        if (Array.isArray(value)) {
            return _$(`???????????? {n} ???`, {n: count(param)});
        } else {
            return _$(`???????????? {n} ?????????`, {n: count(param)});
        }
    },
    rangeLength(value, item, param) {
        if (Array.isArray(value)) {
            return _$(`????????? {n} ??? {m} ???`, {n: count(param[0]), m: count(param[1])});
        } else {
            return _$(`????????? {n} ??? {m} ?????????`, {n: count(param[0]), m: count(param[1])});
        }
    },
    max(value, item, param) {
        return _$(`?????????????????? {n} ??????`, {n: param});
    },
    min(value, item, param) {
        return _$(`?????????????????? {n} ??????`, {n: param});
    },
    range(value, item, param) {
        return _$(`????????? {n[0]} ??? {n[1]} ????????????`, {n: param});
    },
    step(value, item, param) {
        return _$(`?????????????????? {n} ??????`, {n: param});
    },
    equalTo: () => _$('?????????????????????'),
};

export const classNames = {};

export const addMethod = function(name, method, message, className) {
    methods[name] = method;
    messages[name] = message !== undefined ? message : messages[name];
    classNames[name] = className;
};
