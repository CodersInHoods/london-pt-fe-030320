let step = 0;
let counter = 0;

const stepCounter = document.querySelector(".step_value ");

const incDecButtons = document.querySelector(".inc_dec");
const currentCounter = document.querySelector(".counter_value");
const setStep = document.querySelector(".step_form");
const stepInput = document.querySelector("#step");
const auto_inc_dec = document.querySelector(".auto_inc_dec")
    /**
     * Exercise 1
     *
     * create a function {action} which will take a {symbol} param: "+" or "-".
     * increment {counter} by {step} if you pass "+", or
     * decrement {counter} by {step} if you pass "-"
     *
     * NOTE: ".counter_value" should always represent the current value of {counter}
     */

const action = symbol => {
    if (symbol === "+") {
        counter += step;
        console.log(counter);
        currentCounter.innerText = counter;
        console.log(currentCounter.innerText);
    } else if (symbol === "-" && counter > 0) {
        counter -= step;
        currentCounter.innerText = counter;
    }
}





/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 */
setStep.addEventListener("submit", () => {
        step = parseInt(stepInput.value);
        stepCounter.innerText = step;
        stepInput.value = 1;
    })
    /**
     * Exercise 3
     *
     * handle click on "#decrement" button and
     * decrement counter by {step}
     *
     * NOTE: remember to use your {action} function
     */

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */
incDecButtons.addEventListener("click", event => {

        if (event.target.id === "increment") {
            action("+");
        } else if (event.target.id === "decrement") {
            action("-");
        }

    })
    /**
     * Exercise 5
     *
     * when the user clicks on "#auto_decrement",
     * {counter} should be decremented by {step} every second
     *
     * NOTE: ".counter_value" should represent current state of counter
     */

var handle;
auto_inc_dec.addEventListener("click", event => {
    if (event.target.id === "auto_decrement") {
        clearInterval(handle);
        handle = setInterval(action, 1000, "-");
        console.log(event.target.id);
    } else if (event.target.id === "auto_increment") {
        clearInterval(handle);
        handle = setInterval(action, 1050, "+");
        console.log(event.target.id);
    } else if (event.target.id === "stop_auto") {
        clearInterval(handle);
        console.log(event.target.id);
    }
})

/**
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */



/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */