import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
	test("should have empty h1", () => {
		const { container } = render(<App />);
		const heading = container.querySelector("h1");

		expect(heading).toHaveTextContent("");
	});

	test("should have inputs with value which represents {inputText}", () => {
		const { container } = render(<App />);
		const firstInput = container.querySelector(".first");
		const secondInput = container.querySelector(".second");

		expect(firstInput.value).toBe("");
		expect(secondInput.value).toBe("");
	});

	test("should update inputs values on any input change", () => {
		const { container } = render(<App />);
		const firstInput = container.querySelector(".first");
		const secondInput = container.querySelector(".second");

		fireEvent.change(firstInput, { target: { value: "Coders In Hoods" } });
		expect(firstInput.value).toBe("Coders In Hoods");
		expect(secondInput.value).toBe("Coders In Hoods");
    });
    
    test("should update h1 text on any input change", () => {
		const { container } = render(<App />);
		const h1 = container.querySelector("h1");
		const firstInput = container.querySelector(".first");
		const secondInput = container.querySelector(".second");

		fireEvent.change(firstInput, { target: { value: "Coders In Hoods" } });
		expect(h1).toHaveTextContent("Coders In Hoods");
        
        fireEvent.change(secondInput, { target: { value: "Bootcamp" } });
        expect(h1).toHaveTextContent("Bootcamp");
	});
});
