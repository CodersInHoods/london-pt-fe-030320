import React from "react";
import { render } from "@testing-library/react";

import Cart from "./Cart";

describe("Cart", () => {
	const cart = [
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

	test("should render h3 with 'Cart' title", () => {
		const { container } = render(<Cart cart={cart} />);
		const h3 = container.querySelector("h3");

		expect(Boolean(h3)).toBe(true);
		expect(h3.innerHTML).toEqual("Cart");
    });
    
    test("should render all items", () => {
		const { container } = render(<Cart cart={cart} />);
		const listItems = container.querySelectorAll("li");

		expect(listItems.length).toEqual(2);
	});
});
