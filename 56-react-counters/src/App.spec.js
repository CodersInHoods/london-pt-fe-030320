import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
	test("should not render Counter component", () => {
		const wrapper = shallow(<App />);

		const countersLength = wrapper.find("Counter").length;

		expect(countersLength).toEqual(0);
    });
    
    test("should render 1 Counter component", () => {
		const wrapper = shallow(<App />);
        const addCounterBtn = wrapper.find(".newCounter");

        addCounterBtn.simulate('click');
        const countersLength = wrapper.find("Counter").length;
		expect(countersLength).toEqual(1);
	});
});
