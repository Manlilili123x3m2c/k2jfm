import Intact from 'intact';
import {mapChildren} from '../../utils';
import mx from '../mxgraph';
import {DLayout} from '../layouts/layout';

const {mxCell, mxGeometry} = mx;

export class DShape extends Intact {
    static template = function(data, Vdt) {
        return Vdt.miss.h(data.constructor.name, null, data.children);
    };

    static propTypes = {
        borderStyle: ['solid', 'dashed', 'dotted'],
    }; 

    defaults() {
        return {
            html: undefined,
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            borderStyle: 'solid',

            _diagram: undefined,
            _parent: undefined,
            _layout: undefined,
        };
    }

    init(...args) {
        // set parentDom to null to avoid the dom being appended to the parent
        this.parentDom = null;
        super.init(...args);
        return this.placeholder = document.createComment(this.constructor.name);
    }

    hydrate(...args) {
        this.parentDom = null;
        super.hydrate(...args);
        return this.placeholder = document.createComment(this.constructor.name);
    }

    update(...args) {
        super.update(...args);
        return this.placeholder;
    }

    _init() {
        this._isRendered = false;

        this.on('$receive:children', (c, children) => {
            let hasElement = false;
            this.children = mapChildren(children, vNode => {
                const proto = vNode.tag.prototype;
                if (proto instanceof DShape || proto instanceof DLayout) {
                    vNode.props = {
                        ...vNode.props,
                        _diagram: this.get('_diagram'),
                        _parent: this,
                    };
                } else {
                    hasElement = true;
                }
                return vNode;
            });
            this.hasElement = hasElement;
        });
    }

    _mount() {
        const {_layout} = this.get();

        this.cell = this._cell();

        this._addToDigram();

        if (_layout) {
            _layout.addShape(this);
        }

        this.on('$receive', this._onChangeProps);
    }

    _addToDigram() {
        this.get('_diagram').addShape(this);
    }

    _onChangeProps(c, keys) {
        const graph = this.get('_diagram').graph;
        const model = graph.getModel();

        model.beginUpdate();
        this._updateProps(model, keys);
        model.endUpdate();
    }

    _updateProps(model, keys) {
        if (keys.find(key => ['left', 'top', 'width', 'height'].indexOf(key) > -1))  {
            // update geometry 
            const geo = this._getGeometry();
            model.setGeometry(this.cell, geo);
        }
        if (keys.find(key => key === 'html')) {
            // update value
            const value = this._getValue();
            model.setValue(this.cell, value);
        }
        // update style
        const stylesheet = this._getStylesheet();
        model.setStyle(this.cell, stylesheet);
        this._setStyle();
    }

    render() {
        if (this._isRendered) return;

        const diagram = this.get('_diagram');
        const parent = this.get('_parent');
        const graph = diagram.graph;
        const cell = this.cell;

        cell.vertex = true;

        this._setStyle();

        graph.addCell(cell, parent.cell);

        this._isRendered = true;
    }

    /**
     * generate the cell
     */
    _cell() {
        return new mxCell(this._getValue(), this._getGeometry(), this._getStylesheet());        
    }

    _getValue() {
        const {html} = this.get();
        return html == null ? this.hasElement && this.element || null : String(html);
    }

    _getStylesheet() {
        return '';
    }

    _getGeometry() {
        const {width, height, top, left} = this.get();
        return new mxGeometry(+left, +top, +width, +height);
    }

    _setStyle() {
        const diagram = this.get('_diagram');
        const parent = this.get('_parent');
        const graph = diagram.graph;
        const cell = this.cell;
        const cells = [cell];
        const styles = this._genStyles();

        // if hasElement, disable edit
        graph.setCellStyles('editable', this.hasElement ? 0 : 1, [cell]);

        for (let key in styles) {
            graph.setCellStyles(key, styles[key], cells);
        }
    }

    _genStyles() {
        return this._genStylesForPattern(this.get('borderStyle'));
    }

    _genStylesForPattern(pattern) {
        const styles = {};

        switch (pattern) {
            case 'dashed':
                styles.dashed = 1;
                styles.dashPattern = null;
                break;
            case 'dotted':
                styles.dashed = 1;
                styles.dashPattern = '1 2';
                break;
            case 'solid':
                styles.dashed = null;
                styles.dashPattern = null;
                break;
        }

        return styles;
    }

    _destroy() {
        const {_diagram, _layout} = this.get();
        const graph = _diagram.graph;

        this._deleteFromDiagram();
        graph.removeCells([this.cell], false);

        if (_layout) {
            _layout.deleteShape(this);
        }
    }

    _deleteFromDiagram() {
        this.get('_diagram').deleteShape(this);
    }
}
