// ============================================
// ALL IMPLEMENTATIONS SHOULD BE WITH {map} METHOD
// ============================================

/**
 * Exercise 1
 *
 * create an arrow function {convertToPositive} which takes
 * array of numbers, convert all negatives to positives and return
 * a new array.
 */
array = [1, 4, -6, 8, -9, 4, -2];

const convertToPositive = array =>
    array.map(item => {
        if (item < 0) {
            item = item * -1;
        }
        return item;
    })

console.log(convertToPositive(array));


/**
 * Exercise 2
 *
 * create an arrow function {getAllNames} which will take
 * an array of users(objects) as parameter and return an
 * array on names
 *
 * Ex: getAllNames([
 *   {name: 'Alex', age: 26},
 *   {name: 'John', age: 25}
 * ]) will return ['Alex', 'John']
 */
const users = [
    { name: 'Alex', age: 26 },
    { name: 'John', age: 25 }
]

const getAllNames = users =>
    users.map(elem => elem.name);

console.log(getAllNames([
    { name: 'Alex', age: 26 },
    { name: 'John', age: 25 }
]));



/**
 * Exercise 3
 *
 * create a function {greetAll} that takes array of names as a parameter
 * and return a new array of greetings "Hi, {name}!"
 */
const names = [`niv`, `ami`, `shimon`];

const greetAll = names =>
    names.map(name => `Hi, ${name}!`);


console.log(greetAll([`niv`, `ami`, `shimon`]));

/**
 * Exercise 4
 *
 * create a function {multiplyAllNumbers} that takes an array as a param
 * and multiply all numbers inside array by 5 and return the whole array
 * with multiplied numbers
 */

const multiplyAllNumbers = array =>
    array.map(elem => {
        if (typeof elem === "number") {
            elem = elem * 5;
            return elem;
        } else {
            return elem;
        }
    })

console.log(multiplyAllNumbers(["Alex", 6, "John", 7, "Mimi", 4]));