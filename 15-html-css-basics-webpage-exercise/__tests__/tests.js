const fs = require("fs");
const path = require("path");
const htmlString = fs.readFileSync(
	path.resolve(__dirname, "../index.html"),
	"utf8"
);

const parser = new DOMParser();
const htmlNode = parser.parseFromString(htmlString, "text/html");

jest.dontMock("fs");

describe("Caudex font", () => {
	test("Caudex font imported", () => {
		expect(htmlNode.querySelector("link").href.includes("Caudex")).toBeTruthy();
	});
});

describe("h1", () => {
	test("page has h1 element", () => {
		expect(htmlNode.querySelector("h1")).not.toBe(null);
	});

	test("element font family is Caudex", () => {
		const h1 = htmlNode.querySelector("h1");
		
		expect(getComputedStyle(h1).fontFamily).toEqual('"Caudex"');
	});

	test("text aligned to the center", () => {
		const h1 = htmlNode.querySelector("h1");
		
		expect(getComputedStyle(h1).textAlign).toEqual('center');
	});
});

describe("h3", () => {
	test("page has h3 element", () => {
		expect(htmlNode.querySelector("h3")).not.toBe(null);
	});

	test("element font family is Caudex", () => {
		const h3 = htmlNode.querySelector("h3");
		
		expect(getComputedStyle(h3).fontFamily).toEqual('"Caudex"');
	});

	test("text aligned to the center", () => {
		const h3 = htmlNode.querySelector("h3");
		
		expect(getComputedStyle(h3).textAlign).toEqual('center');
	});
});

describe("Image", () => {
	test("page has figure element", () => {
		expect(htmlNode.querySelector("figure")).not.toBe(null);
	});

	test("page has img element", () => {
		expect(htmlNode.querySelector("img")).not.toBe(null);
	});

	test("page has figcaption element", () => {
		expect(htmlNode.querySelector("figcaption")).not.toBe(null);
	});

	test("element font family is Caudex", () => {
		const figcaption = htmlNode.querySelector("figcaption");
		
		expect(getComputedStyle(figcaption).fontFamily).toEqual('"Caudex"');
	});

	test("element color is #B0665D", () => {
		const figcaption = htmlNode.querySelector("figcaption");
		
		expect(getComputedStyle(figcaption).color).toEqual('rgb(176, 102, 93)');
	});

	test("text aligned to the center", () => {
		const figcaption = htmlNode.querySelector("figcaption");
		
		expect(getComputedStyle(figcaption).textAlign).toEqual('center');
	});
});

describe("p", () => {
	test("page has at least 3 p elements", () => {
		expect(htmlNode.querySelectorAll("p").length).toBeGreaterThan(2);
	});

	test("element font family is Caudex", () => {
		const p = htmlNode.querySelector("p");
		
		expect(getComputedStyle(p).fontFamily).toEqual('"Caudex"');
	});
});
