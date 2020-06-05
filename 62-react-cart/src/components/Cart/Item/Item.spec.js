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
		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);
		const innerHTML = container.innerHTML;

		expect(innerHTML.includes("butter")).toBe(true);
	});

	test("should have input with type number", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);
		const input = container.querySelector("input");

		expect(input.type).toEqual("number");
	});

	test("should have input value = 20", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);
		const input = container.querySelector("input");

		expect(parseInt(input.value)).toEqual(item.quantity);
	});

	test("input should have min = 0", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);
		const input = container.querySelector("input");

		expect(input.min).toEqual("0");
	});

	test("input should have max value to equal item quantity", () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};
		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);
		const input = container.querySelector("input");

		expect(parseInt(input.max)).toEqual(item.quantity);
	});

	test("should handle update button click", async () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};

		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);

		fireEvent.click(container.querySelector(".update"));

		expect(updateCart).toHaveBeenCalledTimes(1);
	});

	test("should handle delete button click", async () => {
		const item = {
			id: 1,
			name: "butter",
			quantity: 20,
		};

		const updateCart = jest.fn();
		const { container } = render(<Item item={item} updateCart={updateCart} />);

		fireEvent.click(container.querySelector(".delete"));

		expect(updateCart).toHaveBeenCalledTimes(1);
	});
});
