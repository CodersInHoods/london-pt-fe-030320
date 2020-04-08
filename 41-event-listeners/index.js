// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const button = document.querySelector("div.click > button");

function clickTheButton() {
    button.addEventListener("click", () => {
        console.log("click happened")
    })
}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const a = document.querySelector("div.mouseover > a");

function hoverOver() {
    a.addEventListener("mouseover", () => {
        console.log("a message for the masses");
    })
}
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
function handleLeave() {
    a.addEventListener("mouseleave", () => {
        console.log("a message for the leaving mouses");
    })
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const input = document.querySelector("div.input > input");

function focusOnMe() {
    input.addEventListener("focus", () => {
        console.log("i am just a humble focus message")
    })
}
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */


function clickElsewhere() {
    input.addEventListener("focus", (event) => {
        targetEl = event.target;
        document.addEventListener("click", (eve) => {
            console.log("clicked")
            if (targetEl !== eve.target) {
                console.log("somewhere else")
            }
        })
    })
}

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

function pressAKey() {
    input.addEventListener("focus", () => {
        input.addEventListener("keydown", (eve) => {
            console.log("key pressed: " + eve.key)
        })
    })
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function releaseAKey() {
    input.addEventListener("focus", () => {
        input.addEventListener("keyup", (eve) => {
            console.log("key pressed: " + eve.key)

        })
    })
}

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function inputToUpperCase() {
    input.addEventListener("focus", (event) => {
        input.addEventListener("keydown", () => {
            input.addEventListener("keyup", (eve) => {
                text = eve.target;
                text.value = text.value.toUpperCase();

            })

        })
    })
}

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
items = document.querySelector("#items");

function handleSelectChange() {
    items.addEventListener("change", () => {
        console.log(items.value)
    })
}

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const formInput = document.querySelectorAll("form > input")
const form = document.querySelector("form");

function submitFormHandler() {
    form.addEventListener("submit", () => {
        event.preventDefault();
        const object = {};
        for (key of formInput) {
            object[key.name] = key.value;
        }
        console.log(object);
    })
}
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

const handleScroll = () => {
    document.addEventListener("scroll", () => {
        console.log(window.scrollY);
    })
}