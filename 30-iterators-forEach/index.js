// Examples
/**
 * with Inline function callback
 *
 * const callback = () => {}
 * array.foreach(callback)
 */

/**
 * with anonymous function callback
 *
 * array.foreach(arrayItem => {})
 */

/* ======================== */
/* external callback version */
/* ======================== */

/**
 * Exercise 1
 * create an arrow function {forEachCallback} that takes
 * param and logout it.
 *
 * create a function {logAllWithExternalCallback} that will take an array
 * and with forEach log every element from your array
 * use {forEachCallback} as a callback function for forEach
 */
const array = [3, 11, 28, 4, 9]

const forEachCallback = param =>
    console.log(param);

const logAllWithExternalCallback = array => {
    array.forEach(forEachCallback);
}

logAllWithExternalCallback(array);


/* =========================== */
/* anonymous callbacks version */
/* =========================== */
/**
 *
 * create a function {logAllWithAnonymousCallback} which will
 * do same thing as {logAllWithExternalCallback} but with
 * anonymous callback
 */


const logAllWithAnonymousCallback = (array => {
    array.forEach(item =>
        console.log(item));
})



/**
 * Exercise 2
 *
 * module 3
 *
 * create a arrow function {dividableBy3} that takes an array
 * of numbers as a param. With forEach, filter it and return a new
 * filtered array what will contain only numbers that dividable by 3
 * without remainder
 *
 * Ex: dividableBy3([3,7,9,11]) => return [3,9]
 */

const dividableBy3 = array => {
    const dividedArray = [];
    array.forEach(item => {
        if (item % 3 === 0) {
            dividedArray.push(item);
        }
    })
    return dividedArray;
}
console.log(dividableBy3(array));

/**
 * Exercise 3
 * create an arrow function {oddNumbersSum} which takes an array
 * of numbers and return sum of all odd numbers.
 *
 * Use forEach to loop through the array.
 */

const oddNumbersSum = array => {
    let sum = 0;
    array.forEach(elem => {
        if (elem % 2 === 1) {
            sum = sum + elem;
        }
    })
    console.log(sum);
    return sum;
}
oddNumbersSum(array);

/**
 * Exercise 4
 * create an arrow function {totalLength} which takes an array
 * with different types. You need to get only strings and return
 * total of their lengths.
 *
 * Use forEach to loop through the array.
 *
 * Ex: ["cat", 5, "dog"] => 6
 */

const totalLength = array => {
    let strings = "";
    array.forEach(elem => {
        if (typeof elem === `string`) {
            strings = strings + elem;
            console.log(strings.length);
        }
    })
    console.log(strings.length);
    return strings.length;
}
totalLength(['name', 22, 32, true, `person`]);