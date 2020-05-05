const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

const { Response } = require("node-fetch");

// Exercise #
describe("API url check", () => {
	test("should show a valid message", async () => {
		fetch = () => new Promise((resolve) => resolve(new Response()));

		input.value = "https://cat-fact.herokuapp.com/facts";
		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 10));
		const a = result.querySelector("a");

		expect(result.innerHTML.includes("Valid link!")).toBe(true);
		expect(a.target).toEqual("_blank");
		expect(a.href).toEqual("https://cat-fact.herokuapp.com/facts");
	});

	test("should show an error message", async () => {
		fetch = () => new Promise((resolve) => resolve(new Response("bad thing", {status: 400})));

		input.value = "https://cat-fact.herokuapp.com/fact";

		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 10));

		expect(result.innerText).toEqual("Request failed with status code: 400");
	});

	test("should reset result", async () => {
		result.innerText = "Hello";

		expect(result.innerText).toEqual("Hello");
		fireEvent.focus(input);
		expect(result.innerText).toEqual("");
	});

	test("should reset input value", async () => {
		input.value = "Hello";

		expect(input.value).toEqual("Hello");
		fireEvent.focus(input);
		expect(input.value).toEqual("");
	});
});
