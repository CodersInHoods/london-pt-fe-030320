jest.mock('chalk', () => ({
	blue: jest.fn(),
	inverse: jest.fn(),
	bgRed: {
		white: jest.fn()
	},
}))

// Exercise 2
describe("renderBlueText", () => {
	test("renderBlueText should be declared with type function", () => {
		expect(typeof renderBlueText).toEqual('function')
	});

	test("renderBlueText set font colour to text", () => {
		renderBlueText()
		expect(chalk.blue).toHaveBeenCalled()
	});
});

// Exercise 3
describe("inversedColourText", () => {
	test("inversedColourText should be declared with type function", () => {
		expect(typeof inversedColourText).toEqual('function')
	});

	test("inversedColourText set inversed colours", () => {
		inversedColourText('Hello')
		expect(chalk.inverse).toHaveBeenCalled()
	});

	test("inversedColourText has been called with your text", () => {
		inversedColourText('Hello')
		expect(chalk.inverse).toHaveBeenCalledWith('Hello')
	});
});

// Exercise 4
describe("styledText", () => {
	test("styledText should be declared with type function", () => {
		expect(typeof styledText).toEqual('function')
	});

	test("styledText set background to red and font colour to white", () => {
		styledText(['Hello'])
		expect(chalk.bgRed.white).toHaveBeenCalled()
	});

	test("styledText has been called with your text", () => {
		styledText('Hello')
		expect(chalk.bgRed.white).toHaveBeenCalledWith('Hello')
	});
});