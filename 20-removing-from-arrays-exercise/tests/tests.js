// splice

test("carBrands is declared", () => {
	expect(Array.isArray(carBrands)).toBe(true);
});

describe("Remove elements from carBrands", () => {
	// Exercise 1
	test("remove the last element", () => {
		expect(carBrands.includes("Land Rover")).toBe(false)
	});

	// Exercise 2
	test("remove the first element", () => {
		expect(carBrands.includes("Mercedes")).toBe(false)
	});

	// Exercise 3
	test("Vauxhall should be removed from carBrands", () => {
		expect(carBrands.includes("Vauxhall")).toBe(false);
	});

	// Exercise 4
	test("Citroen should be removed from carBrands", () => {
		expect(carBrands.includes("Citroen")).toBe(false);
	});

	test("carBrands should include Rolls-Royce", () => {
		expect(carBrands.includes("Rolls-Royce")).toBe(true);
	});
});
