import React from "react";
import { render } from "@testing-library/react";

import Store from "./Store";

describe("Store", () => {
	const stock = [
		{
			id: 1,
			name: "butter",
			quantity: 20,
		},
		{
			id: 2,
			name: "Apples",
			quantity: 5,
		},
	];

	test("should render h3 with 'Store' title", () => {
		const { container } = render(<Store stock={stock} />);
		const h3 = container.querySelector("h3");

		expect(Boolean(h3)).toBe(true);
		expect(h3.innerHTML).toEqual("Store");
    });
    
    test("should render all items", () => {
		const { container } = render(<Store stock={stock} />);
		const listItems = container.querySelectorAll("li");

		expect(listItems.length).toEqual(2);
	});
});
