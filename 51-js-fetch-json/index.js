const button = document.querySelector("button");
const result = document.querySelector(".result");
const input = document.querySelector("input");
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

const fetchData = async (url) => {
    const response = await fetch(url).then((resp) => resp.json());
    
    return response.all;
};

/**
 * Description of the application:
 *
 * As a user I should be able to:
 * 1. click on a button "Get random facts"
 * 2. view 3 random facts in ".result" element
 */

const randomNum = (limit) => {
	return Math.floor(Math.random() * limit);
};

const renderCats = (cats) => {
	result.innerHTML = "";

	cats.forEach((cat) => {
		const li = document.createElement("li");
		const author = cat.user
			? `${cat.user.name.first} ${cat.user.name.last}`
            : "Unknown";
            
		li.innerHTML = `
            <p class="fact">${cat.text}</p>
            <p class="author">${author}</p>
        `;
		result.appendChild(li);
	});
};

button.addEventListener("click", async () => {
    const cats = await fetchData("https://cat-fact.herokuapp.com/facts");
	const catsToRender = [];
	for (let i = 0; i < 3; i++) {
		catsToRender.push(cats[randomNum(cats.length)]);
    }

	renderCats(catsToRender);
});
