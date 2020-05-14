document.body.innerHTML = `
    <h1>Random cat facts</h1>
	<button>Get random facts</button>
	<ul class="result">
	    <li>
		    <p class="fact">Text</p>
            <p class="author">Author</p>
        </li>
	</ul>
`;

const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
const author = document.querySelector(".author");
const fact = document.querySelector(".fact");
// ================================

// URL: https://cat-fact.herokuapp.com/facts

// BEFORE YOU START:
// run `npm install -g serve`
// then run `serve` in this directory

/**
 * Exercise 1
 *
 * create a function {fetchData} which takes
 * a URL as an argument and sends a GET request.
 * When you get a response, return an array of facts.
 */

const fetchData = async(url) => {
    return await fetch(url)
        .then((response) => response.json())
        .then((responseText) => responseText.all.map(el => {
            const obj = {
                text: el.text,
                user: el.user
            }
            return obj
        }));
};

const getUsers = async() => {
    const nameAndLast = await fetchData("https://cat-fact.herokuapp.com/facts");
    console.log(nameAndLast[0].user.name.first);
}

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */
const addResult = (fact) => {
    const name = fact.user && fact.user.name ? fact.user.name : null;
    const li = document.createElement("li");
    const pText = document.createElement("p");
    const pAuthor = document.createElement("p");
    pText.innerText = fact.text;
    pAuthor.innerText = `${fact.user.name.first} , ${fact.user.name.last}`;
    li.appendChild(pText);
    li.appendChild(pAuthor);
    result.appendChild(li);

}

button.addEventListener("click", async() => {
    result.innerHTML = "";
    const factsArray = await fetchData("https://cat-fact.herokuapp.com/facts");
    console.log(factsArray);
    const randomNumbers = [];
    console.log(randomNumbers);
    while (randomNumbers.length < 3) {
        const num = Math.floor(Math.random() * factsArray.length) + 1;
        if (randomNumbers.indexOf(num) === -1) randomNumbers.push(num);
    }
    console.log(randomNumbers);
    randomNumbers.forEach(el => addResult(factsArray[el]));
})
const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise 1
describe("fetchData", () => {
	test("should call fetch", () => {
		const prom = {
			then: jest.fn(() => (Promise.resolve({all: []})))
		}
		fetch = () => prom
		fetchData();
		expect(prom.then).toHaveBeenCalled();
	});

	test("should return an array", async () => {
		fetch = () =>
			new Promise((resolve) =>
				resolve({
					json: () => ({
						all: [
							{
								text: "text",
								user: { name: { first: "first name", last: "last name" } },
							},
						],
					}),
					status: 200,
				})
			);
		const data = await fetchData();

		expect(Array.isArray(data)).toBe(true);
	});
});

describe("cat facts", () => {
	test("on click render 3 random facts", async () => {
		fetch = () =>
			new Promise((resolve) =>
				resolve({
					json: () => ({
						all: [
							{
								text: "text1",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text2",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text3",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text4",
								user: { name: { first: "first name", last: "last name" } },
							},
							{
								text: "text5",
								user: { name: { first: "first name", last: "last name" } },
							},
						],
					}),
					status: 200,
				})
			);
		// console.log(await fetchData())
		fireEvent.click(button);
		await new Promise((resolve) => setTimeout(resolve, 100));

		const facts = result.querySelectorAll("li");
		expect(facts.length).toEqual(3);
	});
});
