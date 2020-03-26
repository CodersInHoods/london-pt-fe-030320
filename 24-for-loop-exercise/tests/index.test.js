const myName = "benny"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam", "Maribeth", "Zoe"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */
function greetVisitors() {
    for (i = 0; i < visitors.length; i++) {
        console.log(`Hi ${visitors[i]}, my name is ${myName}`)
    }
    return
}
greetVisitors();

// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

function getElementIndex(item) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == item) {
            index = i;
            result = `item found in position ${index}`;
            console.log(result);
            return index;
        } else {
            result = "Item not found"
        }
    }
    return result;
}
getElementIndex(45);


/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

// ========================

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */

// ========================
function total() {
    totes = 0;

    for (i = 0; i < numbers.length; i++) {

        totes = totes + numbers[i];

    }
    return totes;
}
total()
console.log(totes);




const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
 */


function addIndex() {
    const number = [];
    for (i = 0; i < numbersForIndexes.length; i++) {
        let addNew = numbersForIndexes[i] + i;
        number.push(addNew);
    }
    console.log(number);
    return number;

}
addIndex(numbersForIndexes);




const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

let smallest = forLowestNumber[0];

function lowestNumber() {
    for (i = 0; i < forLowestNumber.length; i++) {
        if (forLowestNumber[i] < smallest) {
            smallest = forLowestNumber[i];
            console.log(smallest);
        }
    }
    return smallest;
}
lowestNumber();
console.log(smallest);
global.console = {
    log: jest.fn()
};

// Exercise #
describe("Greet all visitors", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("console.log needs to be called for each visitor", () => {
        const visitorsCount = visitors.length;
        greetVisitors();

        expect(global.console.log).toHaveBeenCalledTimes(visitorsCount);
    });
});

// Exercise 2
describe("getElementIndex", () => {
    test("should be declared", () => {
        expect(typeof getElementIndex).toEqual("function");
    });

    test("should return correct index", () => {
        const result = getElementIndex(6);

        expect(result).toEqual(4);
    });

    test("should return 'Item not found'", () => {
        const result = getElementIndex(65);

        expect(result).toEqual("Item not found");
    });
});

// Exercise 3
describe("total", () => {
    test("should be declared", () => {
        expect(typeof total).toEqual("function");
    });

    test("should return a number", () => {
        expect(typeof total()).toEqual("number");
    });

    test("should return correct number", () => {
        expect(total()).toEqual(309);
    });
});

// Exercise 4
describe("addIndex", () => {

    test("addIndex should be declared", () => {
        expect(typeof addIndex).toEqual("function");
    });

    test("array should be modified", () => {
        expect(addIndex()).toEqual([6, 3, 18, 26, 88, 26, 15, 10]);
    });
});

// Exercise 5
describe("lowestNumber", () => {
    test("lowestNumber should be declared", () => {
        expect(typeof lowestNumber).toEqual("function");
    });

    test("should return the lowest integer", () => {
        expect(lowestNumber()).toEqual(-34);
    });
});