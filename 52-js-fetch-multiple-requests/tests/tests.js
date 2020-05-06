const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise 1
describe("members", () => {
	test("members should be rendered", async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		expect(resultEl.querySelectorAll("li").length).toEqual(members.length);
	});

	test("should filter results with input", async () => {
		searchEl.value = "ea";
		fireEvent.keyUp(searchEl);
		fireEvent.input(searchEl);
		const filtered = members.filter((member) =>
			member.name.toLowerCase().match("ea")
		);
		
		expect(resultEl.querySelectorAll("li").length).toEqual(filtered.length);
	});
});
