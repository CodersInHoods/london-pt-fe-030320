const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise 1
describe("fetchData", () => {
	test("should call fetch", () => {
		const prom = {
			then: jest.fn(() => (Promise.resolve({all: []})))
		}
		fetch = () => prom
		fetchData();
		expect(prom.then).toHaveBeenCalled();
	});

	test("should return an array", async () => {
		fetch = () =>
			new Promise((resolve) =>
				resolve({
					json: () => ({
						all: [
							{
								text: "text",
								user: { name: { first: "first name", last: "last name" } },
							},
						],
					}),
					status: 200,
				})
			);
		const data = await fetchData();

		expect(Array.isArray(data)).toBe(true);
	});
});

describe("cat facts", () => {
	test("on click render 3 random facts", async () => {
		fetch = () =>
			new Promise((resolve) =>
				resolve({
					json: () => ({
						all: [
							{
								text: "text1",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text2",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text3",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text4",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text5",
								user: { name: { first: "first name", last: "last name" } },
							},
						],
					}),
					status: 200,
				})
			);
		// console.log(await fetchData())
		fireEvent.click(button);
		await new Promise((resolve) => setTimeout(resolve, 100));

		const facts = result.querySelectorAll("li");
		expect(facts.length).toEqual(3);
	});
});
