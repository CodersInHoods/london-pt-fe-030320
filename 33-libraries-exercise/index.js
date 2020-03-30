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

const styledText = array =>
    array.forEach(element => log(chalk.bgRed.white(element)));

styledText([`one`, `two`, `theww`]);