import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Item from "./Item";

describe("Item", () => {
	test("should have item name", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const { container } = render(<Item item={item} />);
		const innerHTML = container.innerHTML;

		expect(innerHTML.includes("butter")).toBe(true);
	});

	test("should have input with type number", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const { container } = render(<Item item={item} />);
		const input = container.querySelector("input");

		expect(input.type).toEqual("number");
	});

	test("should have input value = 0", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const { container } = render(<Item item={item} />);
		const input = container.querySelector("input");

		expect(input.value).toEqual("0");
	});

	test("input should have min = 0", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const { container } = render(<Item item={item} />);
		const input = container.querySelector("input");

		expect(input.min).toEqual("0");
	});

	test("input should have max value to equal item quantity", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const { container } = render(<Item item={item} />);
		const input = container.querySelector("input");

		expect(parseInt(input.max)).toEqual(item.quantity);
	});

	test("should handle add to cart on button click", async () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};

		const addToCart = jest.fn();
		const { container } = render(
			<Item item={item} addToCart={addToCart} />
        );

        fireEvent.click(container.querySelector('button'));
        
        expect(addToCart).toHaveBeenCalledTimes(1)
	});

	test("should render an Out of stock message", () => {
        const item = {
			id: 1,
			name: "butter",
			quantity: 0,
		};
	    const { container } = render(<Item item={item} />);
	    const errorEl = container.querySelectorAll('.label');

	    expect(errorEl.length).toEqual(1);
	});
});
