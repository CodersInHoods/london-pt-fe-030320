/**
 * Exercise 1
 *
 * Add Chalk(https://github.co$ npm install chalkm/chalk/chalk) to your project
 */
const chalk = require('chalk');
const log = console.log;
/**
 * =============================================
 * READ CHALK DOCUMENTATION TO SEE HOW TO USE IT
 * =============================================
 */

/**
 * Exercise 2
 *
 *  create a function {renderBlueText} which will log
 * your text but make font colour blue
 *
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */
const renderBlueText = text =>
    log(chalk.blue(text));

renderBlueText(`ninja`);


/**
 * Exercise 3
 *
 * create a function {inversedColourText} which takes string as
 * an argument and log it with inversed background and foreground colors
 * Call this function and run "node index.js" in a terminal
 * to see the result
 */

const inversedColourText = text =>
    log(chalk.inverse(text));

inversedColourText('oh wei wei');
/**
 * Exercise 4
 *
 * create a function styledText that takes array of strings
 * and style each by adding red background colour and setting
 * font colour to white.
 */
newArray = [];

const styledText = array => {
    array.map(element => {
        element = chalk.bgRed.white(element);
        newArray.push(element);
        console.log(element);
        return element;
    });
};

styledText([`one`, `two`, `threw`]);
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