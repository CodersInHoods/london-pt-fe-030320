import React from "react";
import { render } from "@testing-library/react";

import UserCard from "./UserCard";

describe("UserCard", () => {
	const user = {
		age: 20,
		company: "dell",
		email: "tommie.adams@facebook.org",
		eyeColor: "blue",
		id: "5ed2a8068a30c45b73209156",
		name: "Tommie Adams",
		picture: "http://placehold.it/32x32",
    };
    
	test("should render name", () => {
        const { container } = render(<UserCard user={user}/>);

        expect(container.innerHTML.includes('Tommie Adams')).toBe(true)
    });
    
    test("should render email", () => {
        const { container } = render(<UserCard user={user}/>);

        expect(container.innerHTML.includes('tommie.adams@facebook.org')).toBe(true)
	});

	test("should have class card", () => {
        const { container } = render(<UserCard user={user}/>);
		const card = container.querySelectorAll('.card');
        expect(card.length).toEqual(1);
	});
});
