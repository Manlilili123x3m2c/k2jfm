import {configure} from 'kpc/components/utils';
import {Dropdown, DropdownItem, DropdownMenu} from 'kpc/components/dropdown';
import React from 'react';
import ReactDOM from 'react-dom';
import {mount, unmount} from '../../test/utils';

describe('Dropdown', () => {
    it('should wrap dropdown when wrapDropdown is true', () => {
        configure({useWrapper: true});
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <div>
                <Dropdown>
                    <div>test</div>
                    <DropdownMenu>
                        <DropdownItem>option 1</DropdownItem>
                        <DropdownItem>option 2</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>,
            container
        );

        expect(container.innerHTML).to.matchSnapshot();

        configure({useWrapper: false});
        document.body.removeChild(container);
    });

    it('should get key in functional component Dropdown', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const error = console.error;
        const spy = sinon.spy();
        console.error = (...args) => {
            error.apply(console, args);
            spy();
        };

        ReactDOM.render(
            <div>
                <Dropdown key="aaa">
                    <div key="aa">test</div>
                    <DropdownMenu key="bb">
                        <DropdownItem>option 1</DropdownItem>
                        <DropdownItem>option 2</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>,
            container
        );

        expect(spy.callCount).to.equal(0);

        document.body.removeChild(container);
        console.error = error;
    });
});
