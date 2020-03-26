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
    i = 0;
    counter = 0;
    ruler.push(0);
    while (ruler[i] < 100) {
        i++;
        counter = counter + 10;
        ruler.push(counter);
    }
    console.log(ruler);
}
rulerConstructor();
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
partyPadding(["ben", "sammy", "elton"]);