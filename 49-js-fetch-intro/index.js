const form = document.querySelector("form");
const result = document.querySelector(".result");
const input = document.querySelector("input");
// ================================

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve ./` to serve your index page

/**
 * Exercise 1
 *
 * create a function {getResponse} which takes
 * a URL as an argument and makes a GET request.
 * If the response {status} code is successful,
 * call a function which will render "Valid link! {Link}"
 * in {result} element, otherwise render
 * `Request failed with status code: {errorCode}`
 */

const getResponse = (url) => {
    fetch(url).then((response) => {
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
            result.innerText = "Valid link!";
        } else {
            result.innerText = `Request failed with status code: ${responses.status}`;
        }

    })
}

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. provide URL in input and submit my request
 * 2. if provided URL is a valid API URL, then I should see
 * a message with a link.
 * 3. When I click on a link, it should be opened in a new tab
 * 4. if provided URL is invalid API URL, then I should see
 * an error message in {result} with status code.
 * 5. When I focus on input, it should clear my input and hide
 * {result}
 */
const Checkresponse = (url) => {
    fetch(url).then((response) => {
        console.log("bloop");
        console.log(response);
        if (response.status >= 200 && response.status < 300) {
            result.innerHTML = `The URL is valid, you can visit it 
            <a href="${url}">here</a>`;
        } else {
            result.innerText = `Request failed with status code: ${response.status}`;
        }

    })
}
input.addEventListener("focus", () => {
    input.value = "";
    result.style.display = "none"
})

form.addEventListener("submit", (el) => {
    console.log("submitted", el);
    const url = document.querySelector("form > input").value;
    result.style.display = null;
    Checkresponse(url);
})