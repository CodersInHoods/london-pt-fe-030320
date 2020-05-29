import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe('App', () => {
    test('should render all users from state', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('li').length).toEqual(0);
    })

    test('should add 1 user to the list', async () => {
        const wrapper = shallow(<App />);
        const addBtn = wrapper.find('.newUser');

        addBtn.simulate('click');

        await new Promise(resolve => setTimeout(resolve, 500));
        expect(wrapper.find('li').length).toEqual(1);
    })
    
    test('should add 2 users to the list', async () => {
        const wrapper = shallow(<App />);

        wrapper.find('.newUser').simulate('click');

        await new Promise(resolve => setTimeout(resolve, 500));

        wrapper.find('.newUser').simulate('click');
        await new Promise(resolve => setTimeout(resolve, 500));

        expect(wrapper.find('li').length).toEqual(2);
    })
})