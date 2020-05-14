Object.defineProperty(global.Element.prototype, "innerText", {
  get() {
    return this.textContent;
  },
  set(str) {
    this.innerHTML = this.textContent = str;
  },
});

document.body.innerHTML = `
<h1>API URL checker</h1>
<form action="#">
	<input type="text" placeholder="Provide URL...">
	<button type="submit">Submit</button>
</form>
<h3 class="result"></h3>
`;

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
const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

const { Response } = require("node-fetch");

// Exercise #
describe("API url check", () => {
	test("should show a valid message", async () => {
		fetch = () => new Promise((resolve) => resolve(new Response()));

		input.value = "https://cat-fact.herokuapp.com/facts";
		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 10));
		const a = result.querySelector("a");

		expect(result.innerHTML.includes("Valid link!")).toBe(true);
		expect(a.target).toEqual("_blank");
		expect(a.href).toEqual("https://cat-fact.herokuapp.com/facts");
	});

	test("should show an error message", async () => {
		fetch = () => new Promise((resolve) => resolve(new Response("bad thing", {status: 400})));

		input.value = "https://cat-fact.herokuapp.com/fact";

		fireEvent.submit(form);
		await new Promise((resolve) => setTimeout(resolve, 10));

		expect(result.innerText).toEqual("Request failed with status code: 400");
	});

	test("should reset result", async () => {
		result.innerText = "Hello";

		expect(result.innerText).toEqual("Hello");
		fireEvent.focus(input);
		expect(result.innerText).toEqual("");
	});

	test("should reset input value", async () => {
		input.value = "Hello";

		expect(input.value).toEqual("Hello");
		fireEvent.focus(input);
		expect(input.value).toEqual("");
	});
});
