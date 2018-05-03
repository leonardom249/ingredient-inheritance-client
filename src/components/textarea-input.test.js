import React from 'react';
import {shallow} from 'enzyme';

import TextArea from './textarea-input';

describe('<TextArea />', () => {
    it('Renders without crashing with no warning or errors', () => {
        const meta={'touched':true, 'warning': null, 'error':null}
        shallow(<TextArea meta={meta}/>);
    });
    it('Renders without crashing with no warning but has errors', () => {
        const meta={'touched':true, 'warning': null, 'error':'Error'}
        shallow(<TextArea meta={meta}/>);
    });
    it('Renders without crashing with warning but no errors', () => {
        const meta={'touched':true, 'warning': 'warning', 'error':null}
        shallow(<TextArea meta={meta}/>);
    });
    it('Renders without crashing with warning AND errors', () => {
        const meta={'touched':true, 'warning': 'warning', 'error':'Error'}
        shallow(<TextArea meta={meta}/>);
    });

});