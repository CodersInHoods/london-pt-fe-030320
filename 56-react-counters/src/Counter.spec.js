import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe('Counter', () => {
    test('should render with counter value 0', () => {
        const wrapper = shallow(<Counter />);
        const h1 = wrapper.find('h1')

        expect(h1.text()).toEqual("0");
    })

    test('should be able to increment counter', () => {
        const wrapper = shallow(<Counter />);

        const incrementBtn = wrapper.find('.increment');
        incrementBtn.simulate('click');

        const h1 = wrapper.find('h1');

        expect(h1.text()).toEqual("1");
    })

    test('should be able to decrement counter', () => {
        const wrapper = shallow(<Counter />);

        const decrementBtn = wrapper.find('.decrement');
        decrementBtn.simulate('click');

        const h1 = wrapper.find('h1');

        expect(h1.text()).toEqual("-1");
    })
    
})