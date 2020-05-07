const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// url for testing: http://numbersapi.com/random

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * URL as an argument and sends a GET request.
 * When you receive a response, render the
 * string in {.result} element
 */

const getResponse = (URL) => {
    fetch(URL)
        .then((response) => response.text())
        .then((responseText) => {
            result.innerText = responseText;
        })
};


input.addEventListener("focus", () => {
    input.value = "";
    result.innerText = "";
})

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide a URL in the input field and submit it
 * 2. see the body of the response in {.result} element
 * 3. focus on input, clearing my previous input and hiding {.result} element
 */

form.addEventListener("submit", (el) => {
    console.log("submitted", el);
    const url = input.value;
    getResponse(url);
    result.style.visibility = "visible";
});