import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  test("renders all animals", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("li").length).toBe(6);
  });

  test("all animals have unique keys", () => {
    const wrapper = shallow(<App />);
    expect(
      [...new Set(wrapper.find("li").map((listItem) => listItem.key()))]
        .length
    ).toBe(6);
  });

  test("renders APP_TITLE", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("h1").text()).toBe("Awesome Pet Shop");
  });

  test("renders today's date", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find("p").text()).toBe(new Date().toLocaleDateString());
  });
});
