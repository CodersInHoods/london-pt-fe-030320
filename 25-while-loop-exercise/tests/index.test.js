let count = 10; // DO NOT TOUCH THIS LINE :)

/**
 * Exercise 1
 * create a function {countdown}
 * This function should have while loop which will
 * decrease {count} and log every step with message
 * "Remaining: X" where X is a number. When {count} will
 * be equal to 0 log message "Go!"
 */

// ==========================
function countdown() {
    i = 10;
    while (i != 0) {
        console.log(`Remaining: ${i}`);
        i--;
    }
    console.log("Go!")
}

countdown(15);
/**
 * Exercise 2
 *
 * create a function {} which should
 * be the same as {countdown} the only difference is
 * that it takes any number as a param and count from that point
 */
function countdownWithParam(Param) {
    i = Param;
    while (i != 0) {
        console.log(`Remaining: ${i}`);
        i--;
    }
    console.log("Go!")
}

countdownWithParam(15);
// ==========================
let ruler = [];

/**
 * Exercise 3
 * create a function {rulerConstructor} and by using while loop
 * create a ruler with step 10 and push each number to {ruler}
 * until you reach 100.
 * The result of calling {rulerConstructor} is that {ruler}
 * will be [0,10,20,30,40,50,60,70,80,90,100]
 */
function rulerConstructor() {
    const i = 0;
    const counter = 0;

    ruler.push(0);
    while (ruler[i] < 100) {
        i++;
        counter = counter + 10;
        ruler.push(counter);
    }
    console.log(ruler);
}


//    ruler[0] = 0;
//
//   while (ruler[ruler.length - 1] < 100) {
//        const newValue = ruler[ruler.length - 1] + 10;
//        ruler.push(newValue);
//    }
// }
// ==========================

/**
 * Exercise 4
 * create a function {partyPadding} which takes an array of names
 * of guests at a party. If there are less than 5 guests, add
 * "Neighbour" to the array until you have at least 5 guests.
 * Without using an if statement!
 */

function partyPadding(nameArray) {
    while (nameArray.length < 5) {
        nameArray.push("Neighbour");
    }
    console.log(nameArray);
}
partyPadding(["nina", "allen", "sam"]);
global.console = {
    log: jest.fn()
};

// Exercise 1
describe("countdown", () => {
    countdown();
    test("countdown is declared", () => {
        expect(Boolean(countdown)).toBe(true);
    });

    test("countdown is a function", () => {
        expect(typeof countdown).toEqual("function");
    });

    test("console.log has been called 11 times", () => {
        expect(global.console.log).toBeCalledTimes(11);
    });

    test("console.log has been called 10 times with 'Remaining: X'", () => {
        for (let i = 0; i < 10; i++) {
            const nth = i + 1;
            const counter = 10 - i;

            expect(global.console.log).toHaveBeenNthCalledWith(
                nth,
                `Remaining: ${counter}`
            );
        }
    });

    test("console.log has been called 1 time with 'Go!'", () => {
        expect(global.console.log).toHaveBeenNthCalledWith(11, "Go!");
    });
});

// Exercise 2
describe("countdownWithParam", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        countdownWithParam(16);
    });

    test("countdownWithParam is declared", () => {
        expect(Boolean(countdownWithParam)).toBe(true);
    });

    test("countdownWithParam is a function", () => {
        expect(typeof countdownWithParam).toEqual("function");
    });

    test("console.log has been called 17 times", () => {
        expect(global.console.log).toBeCalledTimes(17);
    });

    test("console.log has been called correct amount of times with 'Remaining: X'", () => {
        for (let i = 0; i < 16; i++) {
            const nth = i + 1;
            const counter = 16 - i;

            expect(global.console.log).toHaveBeenNthCalledWith(
                nth,
                `Remaining: ${counter}`
            );
        }
    });

    test("console.log has been called 1 time with 'Go!'", () => {
        expect(global.console.log).toHaveBeenNthCalledWith(17, "Go!");
    });
});

// Exercise 3
describe("rulerConstructor", () => {
    test("rulerConstructor is declared", () => {
        expect(Boolean(rulerConstructor)).toBe(true);
    });

    test("rulerConstructor is a function", () => {
        expect(typeof rulerConstructor).toEqual("function");
    });

    test("should build a ruler", () => {
        expect(ruler).toEqual([]);
        rulerConstructor()
        expect(ruler).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });
});

// Exercise 4
describe("partyPadding", () => {
            test("partyPadding is declared", () => {
                expect(Boolean(partyPadding)).toBe(true);
            });

            test("partyPadding is a function", () => {
                expect(typeof partyPadding).toEqual("function");
            });

            test("partyPadding pads a party", () => {
                const guests = ["Mimi", "Archibald"];
                partyPadding(guests)
                expect(guests).toEqual(["Mimi", "Archibald", "Neighbour", "Neighbour", "Neighbour"]);
            });

            test("partyPadding doesn't pad a party which doesn't need padding", () => {
                const guests = ["Mimi", "Archibald", "Acacia", "Ursula", "Jazmin", "William"];
                partyPadding(guests)
                expect(guests).toEqual(["Mimi", "Archibald", "Acacia", "Ursula", "Jazmin", "William"]);
            })
        }