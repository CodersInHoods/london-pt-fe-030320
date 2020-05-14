document.body.innerHTML = `
    <h1>Render response</h1>
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
const {
  fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

describe("Render body as text", () => {
  test("should render body from a response", async () => {
    fetch = () =>
      new Promise((resolve) =>
        resolve({
          text: () =>
            "74 is the number of stars obtained by SpongeBob SquarePants in his driving school.",
          status: 200,
        })
      );

    input.value = "http://numbersapi.com/random";
    fireEvent.submit(form);
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(result.innerText).toEqual(
      "74 is the number of stars obtained by SpongeBob SquarePants in his driving school."
    );
  });

  test("should reset result", async () => {
    result.innerText = "81 is the number of squares on a shogi playing board.";

    expect(result.innerText).toEqual(
      "81 is the number of squares on a shogi playing board."
    );
    fireEvent.focus(input);
    expect(result.innerText).toEqual("");
  });

  test("should reset input value", async () => {
    input.value = "123 is the medical emergency telephone number in Egypt.";

    expect(input.value).toEqual(
      "123 is the medical emergency telephone number in Egypt."
    );
    fireEvent.focus(input);
    expect(input.value).toEqual("");
  });
});
