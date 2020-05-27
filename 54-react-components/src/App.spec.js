import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
	test("renders Navigation component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find("Navigation").length).toBe(1);
	});

	test("renders Header component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find("Header").length).toBe(1);
	});

	test("renders Form component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find("Form").length).toBe(1);
  });
  
	test("renders Content component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find("Content").length).toBe(1);
  });
  
	test("renders Footer component", () => {
		const wrapper = shallow(<App />);

		expect(wrapper.find("Footer").length).toBe(1);
	});
});
