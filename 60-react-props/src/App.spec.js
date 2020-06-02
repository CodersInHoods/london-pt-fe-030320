import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

describe("App", () => {
	test("should fetch and render all contacts", async () => {
		let { container } = render(<App />);

		const users = await fetch(
			"http://localhost:3000/contacts"
		).then((response) => response.json());

        await new Promise((resolve) => setTimeout(resolve, 2000));
        const userCards = container.querySelectorAll('.card');
		
		
		expect(userCards.length).toEqual(users.length);
	});
});
