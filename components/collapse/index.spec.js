import BasicDemo from '~/components/collapse/demos/basic';
import AccordionDemo from '~/components/collapse/demos/accordion';
import {mount, unmount, dispatchEvent} from 'test/utils';
import Intact from 'intact';
import {Collapse, CollapseItem} from 'kpc/components/collapse';

describe('Collapse', () => {
    let instance;

    afterEach(() => unmount(instance));

    it('should toggle expand', (done) => {
        instance = mount(BasicDemo);

        const [title1, title2, title3] = instance.element.querySelectorAll('.k-title');
        title2.click();
        setTimeout(() => {
            console.log(instance.element.innerHTML);
            expect(instance.element.innerHTML.replace(
                'class="c-expand-enter" style="height: 0px;"',
                'style="height: 0px;" class="c-expand-enter"',
            )).to.matchSnapshot();

            title1.click();
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                title3.click();
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 700)
        }, 700);
    });

    it('should expand only one panel', (done) => {
        instance = mount(AccordionDemo);

        const [title1, title2] = instance.element.querySelectorAll('.k-title');
        title2.click();
        setTimeout(() => {
            expect(instance.element.innerHTML).to.matchSnapshot();

            title2.click();
            setTimeout(() => {
                expect(instance.element.innerHTML).to.matchSnapshot();

                done();
            }, 700)
        }, 700);
    });

    it('should trigger end even if height is 0', () => {
        class Component extends Intact {
            @Intact.template({delimiters: ['{', '}']})
            static template = `
                <Collapse class="collapse-test">
                    <CollapseItem title="test" />
                </Collapse>
            `;

            _init() {
                this.Collapse = Collapse;
                this.CollapseItem = CollapseItem;
            }
        }
        // add style
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode('.collapse-test .k-wrapper { padding: 0 !important; }'));
        document.head.appendChild(style);

        instance = mount(Component);

        const title = instance.element.querySelector('.k-title');
        title.click();
        expect(instance.element.innerHTML).to.matchSnapshot();
        title.click();
        expect(instance.element.innerHTML).to.matchSnapshot();

        document.head.removeChild(style);
    });
});
