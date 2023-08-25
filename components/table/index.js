import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

// reference: http://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

let scrollBarWidth = undefined;

const MIN_WIDTH = 40;
const slice = Array.prototype.slice;

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            data: [],
            scheme: {},
            checkType: 'checkbox', // radio | none 
            rowKey(value, index) { return index; },
            checkedKeys: [], // for checkbox
            checkedKey: undefined, // for radio
            rowCheckable: true, // click row to check
            noDataTemplate: '/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~',
            disableRow(data, index) { return false },
            sort: {},
            groups: {},
            resizable: false,

            _padding: 0,
            _disabledAmount: 0,
        }
    }

    _init() {
        // keep the event consistent
        this.on('$change:checkedKeys', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, newValue, oldValue);
        });
        this.on('$change:checkedKey', (c, newValue, oldValue) => {
            this.trigger('$change:checked', c, [newValue], [oldValue]);
        });
        // calculate padding of header when some props have changed
        ['data', 'fixHeader'].forEach(item => {
            this.on(`$changed:${item}`, this._calcHeaderPadding);
        });
        // update disabled amount when some props have changed
        ['data', 'disableRow'].forEach(item => {
            this.on(`$change:${item}`, this._updateDisabledAmount);
        });
        this._updateDisabledAmount();

        this._move = this._move.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _mount() {
        if (scrollBarWidth === undefined) {
            scrollBarWidth = getScrollbarWidth();
        }
        this._calcHeaderPadding();
    }

    isCheckAll() {
        const checkedKeys = this.get('checkedKeys');
        const dataLength = this.get('data').length;
        const disabledAmount = this.get("_disabledAmount");
        const amount = dataLength - disabledAmount;
        return amount && checkedKeys.length === amount; 
    }

    checkAll() {
        const rowKey = this.get('rowKey');
        const disableRow = this.get('disableRow');
        const checkedKeys = [];
        this.get('data').forEach((value, index) => {
            if (!disableRow.call(this, value, index)) {
                checkedKeys.push(rowKey.call(this, value, index));
            }
        });
        this.set('checkedKeys', checkedKeys);
    }

    uncheckAll() {
        this.set('checkedKeys', []);
    }

    /**
     * @brief get the checked data
     * @return {Array}
     */
    getCheckedData() {
        const rowKey = this.get('rowKey');
        const checkType = this.get('checkType');
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys');
            const checkedKeysMap = {};
            checkedKeys.forEach((item) => {
                checkedKeysMap[item] = true;
            });
            return this.get('data').filter((value, index) => {
                const key = rowKey.call(this, value, index);
                return checkedKeysMap[key];
            });
        } else if (checkType === 'radio') {
            const checkedKey = this.get('checkedKey');
            return this.get('data').filter((value, index) => {
                return rowKey.call(this, value, index) === checkedKey;
            });
        } else {
            return [];
        }
    }

    _calcHeaderPadding() {
        if (this.get('fixHeader')) {
            const tableHeight = this.table.offsetHeight;
            const containerHeight = this.scroll.offsetHeight;
            const headerHeight = this.header.offsetHeight;
            this.set('_padding', tableHeight - headerHeight > containerHeight ? scrollBarWidth : 0);
        }
    }

    _updateDisabledAmount() {
        let disabledAmount = 0;
        const disableRow = this.get('disableRow');
        this.get('data').forEach((item, index) => {
            if (disableRow.call(this, item, index)) {
                disabledAmount++;
            }
        });
        this.set('_disabledAmount', disabledAmount);
    }

    _toggleCheckAll(c, checked) {
        if (checked) {
            this.checkAll();
        } else {
            this.uncheckAll();
        }
    }

    _rowCheck(value, index, e) {
        // if is from checkbox or radio then do nothing
        if (e.target.tagName.toLowerCase() === 'input') return;

        if (this.get('rowCheckable')) {
            this._checkUncheckRow(value, index);
        }
    }

    _checkRow(value, index) {
        this._checkUncheckRow(value, index, true, false);
    }

    _uncheckRow(value, index) {
        this._checkUncheckRow(value, index, false, false);
    }

    _checkUncheckRow(value, index, isCheck = false, isToggle = true) {
        if (this.get('disableRow').call(this, value, index)) return;

        const checkType = this.get('checkType');
        const key = this.get('rowKey').call(this, value, index);
        if (checkType === 'checkbox') {
            const checkedKeys = this.get('checkedKeys').slice(0);
            const i = checkedKeys.indexOf(key);
            if ((!isCheck || isToggle) && i > -1) {
                checkedKeys.splice(i, 1);
                this.set('checkedKeys', checkedKeys);
            } else if (isCheck || isToggle) {
                checkedKeys.push(key);
                this.set('checkedKeys', checkedKeys);
            }
        } else if (checkType === 'radio') {
            this.set('checkedKey', key);
        }
    }

    _sort(key, value) {
        const sort = Object.assign({}, this.get('sort'));
        sort.key = key;
        sort.type = sort.type === 'desc' ? 'asc' : 'desc';
        this.set('sort', sort);
    }

    _dragStart(e) {
        // left key
        if (e.which !== 1) return;

        this._resizing = true;
        this._containerWidth = this.element.offsetWidth;
        this._x = e.clientX;

        const currentTh = e.target.parentNode;
        const prevTh = currentTh.previousElementSibling;

        this._currentThs = [currentTh];
        this._prevThs = [prevTh];
        this._tables = [this.table];

        if (this.get('fixHeader')) {
            const ths = this.table.children[0].getElementsByTagName('th');
            const fixThs = currentTh.parentNode.children;
            const index = slice.call(fixThs).indexOf(currentTh);
            this._currentThs.push(ths[index]);
            this._prevThs.push(ths[index - 1]);
            this._tables.push(this.header.children[0]);
        }

        document.addEventListener('mousemove', this._move);
        document.addEventListener('mouseup', this._dragEnd);
    }

    _move(e) {
        if (this._resizing) {
            const delX = e.clientX - this._x;
            const prevWidth = this._prevThs[0].offsetWidth + delX;
            const tableWidth = this.table.offsetWidth + delX;
            
            if (prevWidth < MIN_WIDTH) return;

            this._prevThs.forEach(item => {
                item.style.width = prevWidth + 'px';
            });

            if (this._containerWidth >= tableWidth) {
                this._tables.forEach(item => {
                    item.style.width = '100%';
                });
            } else {
                this._tables.forEach(item => {
                    item.style.width = tableWidth + 'px';
                });
            }

            this._x = e.clientX;
        }
    }

    _dragEnd(e) {
        if (this._resizing) {
            this._resizing = false;
            document.removeEventListener('mousemove', this._move);
            document.removeEventListener('mouseup', this._dragEnd);
        }
    }

    _destroy() {
        this._dragEnd();
    }
}
