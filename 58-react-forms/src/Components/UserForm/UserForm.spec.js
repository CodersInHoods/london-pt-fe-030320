import React from "react";
import { render, fireEvent } from "@testing-library/react";

import UserForm from "./UserForm";

describe("UserForm", () => {
	test("should be able to change user firstName in state", () => {
		const { container } = render(<UserForm />);
		const firstNameInput = container.querySelector(".firstName");

		fireEvent.change(firstNameInput, { target: { value: "Alex" } });

		const stateContainer = container.querySelector(".state");

		expect(stateContainer.innerHTML.includes("Alex")).toBe(true);
	});

	test("should be able to change user lastName in state", () => {
		const { container } = render(<UserForm />);
		const lastNameInput = container.querySelector(".lastName");

		fireEvent.change(lastNameInput, { target: { value: "Smith" } });

		const stateContainer = container.querySelector(".state");

		expect(stateContainer.innerHTML.includes("Smith")).toBe(true);
	});

	test("should be able to change age in state", () => {
		const { container } = render(<UserForm />);
		const ageInput = container.querySelector(".age");

		fireEvent.change(ageInput, { target: { value: "28" } });

		const stateContainer = container.querySelector(".state");

		expect(stateContainer.innerHTML.includes("28")).toBe(true);
	});

	test("should be able to change gender in state", () => {
		const { container } = render(<UserForm />);
		const genderInput = container.querySelector(".gender");

		fireEvent.change(genderInput, {
			target: { value: "male", className: "gender" },
		});

		const stateContainer = container.querySelector(".state");
		expect(stateContainer.innerHTML.includes("male")).toBe(true);
	});

	test("should post user to DB", async () => {
		const { container } = render(<UserForm />);
		const firstNameInput = container.querySelector(".firstName");
		const lastNameInput = container.querySelector(".lastName");
		const ageInput = container.querySelector(".age");
		const genderInput = container.querySelector(".gender");
		const form = container.querySelector("form");
		const age = Math.random();

		fireEvent.change(firstNameInput, { target: { value: "Test" } });
		fireEvent.change(lastNameInput, { target: { value: " User" } });
		fireEvent.change(ageInput, { target: { value: age } });
		fireEvent.change(genderInput, {
			target: { value: "male", className: "gender" },
		});

		const usersOld = await fetch(
			"http://localhost:3000/users"
		).then((response) => response.json());

		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const usersNew = await fetch(
			"http://localhost:3000/users"
		).then((response) => response.json());

		expect(usersNew.length).toEqual(usersOld.length + 1);
	});

	test("should not post user to DB is missing any field value", async () => {
		const { container } = render(<UserForm />);
		const lastNameInput = container.querySelector(".lastName");
		const ageInput = container.querySelector(".age");
		const genderInput = container.querySelector(".gender");
		const form = container.querySelector("form");
		const age = Math.random();

		fireEvent.change(lastNameInput, { target: { value: " User" } });
		fireEvent.change(ageInput, { target: { value: age } });
		fireEvent.change(genderInput, {
			target: { value: "male", className: "gender" },
		});
		const usersOld = await fetch(
			"http://localhost:3000/users"
		).then((response) => response.json());

		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const usersNew = await fetch(
			"http://localhost:3000/users"
		).then((response) => response.json());

		expect(usersNew.length).toEqual(usersOld.length);
	});
});
