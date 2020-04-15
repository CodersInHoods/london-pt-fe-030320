// Exercise 1
describe("generateFibonacci", () => {
	test("should calculate fibonacci correctly", () => {
		expect(generateFibonacci(1)).toEqual([0]);
		expect(generateFibonacci(2)).toEqual([0, 1]);
		expect(generateFibonacci(3)).toEqual([0, 1, 1]);
		expect(generateFibonacci(4)).toEqual([0, 1, 1, 2]);
		expect(generateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
		expect(generateFibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
		expect(generateFibonacci(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
		expect(generateFibonacci(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
		expect(generateFibonacci(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
		expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
	});
});

// Exercise 2
describe("isPowerOf", () => {
	test("should check is number a power of prime number", () => {
		expect(isPowerOf(27, 3)).toBe(true);
		expect(isPowerOf(28, 3)).toBe(false);
		expect(isPowerOf(0, 3)).toBe(false);
		expect(isPowerOf(1, 3)).toBe(false);
		expect(isPowerOf(-27, 3)).toBe(false);
	});
});

