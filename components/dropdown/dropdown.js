import Intact from 'intact';
import {isTextVNode, findParentComponent} from '../utils';
import DropdownMenu from './menu';

const h = Intact.Vdt.miss.h;

export default class Dropdown extends Intact {
    @Intact.template()
    static template(data) {
        return data.get('children');
    }

    defaults() {
        return {
            trigger: 'hover',
            disabled: false,
        }
    }

    _init() {
        this._saveOriginalEvents();
        this.on('$receive:children', () => {
            this._saveOriginalEvents();
        }, {keep: true});
    }

    _saveOriginalEvents() {
        let {children, trigger, className, ...rest} = this.get();
        if (Array.isArray(children)) {
            children = children[0];
        } 
        if (isTextVNode(children)) {
            children = h('span', rest, children, className);
        }

        // save the original event
        const originProps = children.props;
        let hasSaved = false;
        if (!originProps._hasSaved) {
            if (originProps.vueVNode) {
                // for vue element
                const data = originProps.vueVNode.data;
                const on = data && data.on || {};
                originProps._evClick = on.click;
                originProps._evMouseEnter = on.mouseenter;
                originProps._evMouseLeave = on.mouseleave;
            } else {
                originProps._evClick = originProps['ev-click'];
                originProps._evMouseEnter = originProps['ev-mouseenter'];
                originProps._evMouseLeave = originProps['ev-mouseleave'];
            }
            hasSaved = true;
        }
        const props = {};
        // if (trigger === 'click') {
            props['ev-click'] = this.show.bind(this, originProps._evClick);
        // } else {
        if (trigger === 'hover') {
            props['ev-mouseenter'] = this.show.bind(this, originProps._evMouseEnter);
            props['ev-mouseleave'] = this.hide.bind(this, originProps._evMouseLeave);
        }
        if (hasSaved) {
            props._hasSaved = true;
        }
        children.props = {...children.props, ...props};
        this.set('children', children, {silent: true});
    }

    _mount() {
        // the next sibling is DropdownMenu
        // we can not get the menu by call get('menu') directly,
        // because the vNode may be cloned
        const siblings = this.parentVNode.children;
        const index = siblings.indexOf(this.vNode);
        const menu = siblings[index + 1];
        menu.children.dropdown = this;
        this.menu = menu;
    }

    show(fn, e, isFocus) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.menu.children;
        menu.show();

        if (isFocus) {
            menu.focusItemByIndex(0);
        }
    }

    hide(fn, e, immediately) {
        if (typeof fn === 'function') fn(e);

        if (this.get('disabled')) return;

        const menu = this.menu.children;
        menu.hide(immediately);
    }
}
