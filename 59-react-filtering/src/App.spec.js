import React from "react";

import { render, fireEvent, act } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	test("should fetch and render all contacts", async () => {
		const component = render(<App />);

		const users = await fetch(
			"http://localhost:3000/contacts"
		).then((response) => response.json());

		const userElements = component.container.querySelectorAll("li");
		expect(userElements.length).toEqual(users.length);
	});

	test("should render filtered contacts", async () => {
		const { container } = render(<App />);

		await new Promise((resolve) => setTimeout(resolve, 1000));

		const input = container.querySelector("input");
		fireEvent.change(input, { target: { value: "June" } });

		const userElements = container.querySelectorAll("li");
		expect(userElements.length).toEqual(1);
	});
});
