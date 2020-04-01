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
global.console = {
	log: jest.fn()
};
// Exercise 1
describe("forEachCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("forEachCallback is declared and has type function", () => {
		expect(typeof forEachCallback).toEqual("function");
	});

	test("forEachCallback is an arrow function", () => {
		const isArrowFunction = forEachCallback.toString().includes("=>");
		expect(isArrowFunction).toBe(true);
	});

	test("forEachCallback log a parameter", () => {
		forEachCallback("CodersInHoods");
		expect(global.console.log).toHaveBeenCalledWith("CodersInHoods");
	});
});

describe("logAllWithExternalCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logAllWithExternalCallback is declared and has type function", () => {
		expect(typeof logAllWithExternalCallback).toEqual("function");
	});

	test("logAllWithExternalCallback uses forEach", () => {
		const isUsingForeach = logAllWithExternalCallback
			.toString()
			.includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("logAllWithExternalCallback uses forEachCallback", () => {
		const isUsingExternalCallback = logAllWithExternalCallback
			.toString()
			.includes("forEachCallback");
		expect(isUsingExternalCallback).toBe(true);
	});

	test("logAllWithExternalCallback log a parameter", () => {
		const param = ["CodersInHoods", 13, "programming"];
		logAllWithExternalCallback(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});
});

describe("logAllWithAnonymousCallback", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("logAllWithAnonymousCallback is declared and has type function", () => {
		expect(typeof logAllWithAnonymousCallback).toEqual("function");
	});

	test("logAllWithAnonymousCallback uses forEach", () => {
		const isUsingForeach = logAllWithAnonymousCallback
			.toString()
			.includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("logAllWithAnonymousCallback doesn't use forEachCallback", () => {
		const isUsingExternalCallback = logAllWithAnonymousCallback
			.toString()
			.includes("forEachCallback");
		expect(isUsingExternalCallback).toBe(false);
	});

	test("logAllWithAnonymousCallback log a parameter", () => {
		const param = ["CodersInHoods", 13, "programming"];
		logAllWithAnonymousCallback(param);

		for (let i = 0; i < param.length; i++) {
			expect(global.console.log).toHaveBeenNthCalledWith(i + 1, param[i]);
		}
	});
});

// Exercise 2
describe("dividableBy3", () => {
	test("dividableBy3 is declared and has type function", () => {
		expect(typeof dividableBy3).toEqual("function");
	});

	test("dividableBy3 is arrow function", () => {
		const isArrowFunc = dividableBy3.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("dividableBy3 uses forEach", () => {
		const isUsingForeach = dividableBy3.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("dividableBy3 filter array", () => {
		expect(dividableBy3([3, 11, 27, 4, 9])).toEqual([3, 27, 9]);
	});
});

// Exercise 3
describe("oddNumbersSum", () => {
	test("oddNumbersSum is declared and has type function", () => {
		expect(typeof oddNumbersSum).toEqual("function");
	});

	test("oddNumbersSum is arrow function", () => {
		const isArrowFunc = oddNumbersSum.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("oddNumbersSum uses forEach", () => {
		const isUsingForeach = oddNumbersSum.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("oddNumbersSum should return correct total", () => {
		expect(oddNumbersSum([3, 11, 28, 4, 9])).toEqual(23);
	});
});

// Exercise 4
describe("totalLength", () => {
	test("totalLength is declared and has type function", () => {
		expect(typeof totalLength).toEqual("function");
	});

	test("totalLength is arrow function", () => {
		const isArrowFunc = totalLength.toString().includes("=>");
		expect(isArrowFunc).toBe(true);
	});

	test("totalLength uses forEach", () => {
		const isUsingForeach = totalLength.toString().includes("forEach");
		expect(isUsingForeach).toBe(true);
	});

	test("totalLength should return correct total", () => {
		expect(totalLength(['dog', 2, 'kitten', {name: 'Alex'}])).toEqual(9);
		expect(totalLength(['dog', 2, 'cat', {name: 'Alex'}])).toEqual(6);
	});
});
