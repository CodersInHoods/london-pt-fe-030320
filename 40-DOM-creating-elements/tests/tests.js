// Exercise 1
describe("createDOMElement", () => {
	test("createDOMElement should be a function", () => {
		expect(typeof createDOMElement).toEqual("function");
	});

	test("should create an element", () => {
		expect(createDOMElement() instanceof HTMLElement).toBe(true);
	});

	test("should create an element with correct tag name", () => {
		expect(createDOMElement("p").tagName).toEqual("P");
	});
});

// Exercise 2
describe("addPTag", () => {
	test("addPTag should be a function", () => {
		expect(typeof addPTag).toEqual("function");
	});

	test("should create p element with text and add to DOM", () => {
		addPTag("Hello");
		const pTags = document.querySelectorAll("p");

		const lastPText = pTags[pTags.length - 1].innerText;
		expect(lastPText).toEqual("Hello");
	});
});

// Exercise 3
describe("addElementWithClass", () => {
	addElementWithClass("span", "Hello Span", "text_span");

	test("addElementWithClass should be a function", () => {
		expect(typeof addElementWithClass).toEqual("function");
	});

	test("should create an element", () => {
		const span = document.querySelectorAll("span");

		expect(span.length).toEqual(1);
	});

	test("element should have class", () => {
		const span = document.querySelector("span");

		expect(span.classList.contains("text_span")).toBe(true);
	});

	test("element should contain text", () => {
		const span = document.querySelector("span");

		expect(span.innerText).toEqual("Hello Span");
	});
});

// Exercise 4
describe("addElementWithMultipleClasses", () => {
	addElementWithMultipleClasses("div", "Hello div", ["text_div", "text_div_2"]);

	test("addElementWithMultipleClasses should be a function", () => {
		expect(typeof addElementWithMultipleClasses).toEqual("function");
	});

	test("should create an element", () => {
		const div = document.querySelectorAll("div");

		expect(div.length).toEqual(1);
	});

	test("element should have classes", () => {
		const div = document.querySelector("div");

		expect(div.classList.contains("text_div")).toBe(true);
		expect(div.classList.contains("text_div_2")).toBe(true);
	});

	test("element should contain text", () => {
		const div = document.querySelector("div");

		expect(div.innerText).toEqual("Hello div");
	});
});

// Exercise 5
describe("buildAList", () => {
	const listType = "ul";
	const className = "list";
	const quantity = 7;

	beforeEach(() => {
		document.body.innerHTML = "";
	});

	test("buildAList should be a function", () => {
		buildAList(listType, className, quantity);
		expect(typeof buildAList).toEqual("function");
	});

	test("should create a list element", () => {
		buildAList(listType, className, quantity);
		const hasList = Boolean(document.querySelector("ul"));

		expect(hasList).toBe(true);
	});

	test("list element should have class", () => {
		buildAList(listType, className, quantity);
		const list = document.querySelector("ul");

		expect(list.classList.contains("list")).toBe(true);
	});

	test("element should contain li elements", () => {
		buildAList(listType, className, quantity);
		const list = document.querySelector(`.${className}`);
		const listItemsQuantity = list.querySelectorAll("li").length;

		expect(listItemsQuantity).toEqual(quantity);
	});
});

// Exercise 6
describe("prependLiToList", () => {
	const listType = "ul";
	const className = "list";
	const quantity = 7;

	beforeEach(() => {
		document.body.innerHTML = "";
		buildAList(listType, className, quantity);
	});

	test("prependLiToList should be a function", () => {
		expect(typeof prependLiToList).toEqual("function");
	});

	test("should prepend li element", () => {
		const list = document.querySelector(`.${className}`);
		const before = list.querySelectorAll("li").length;
		prependLiToList("First element", "first_element");
		const after = list.querySelectorAll("li").length;

		expect(after - before).toEqual(1);
	});

	test("should prepend li element with a class", () => {
		prependLiToList("First element", "first_element");
		const list = document.querySelector(`.${className}`);
		const firstLi = list.querySelector("li");

		expect(firstLi.classList.contains("first_element")).toBe(true);
	});
});

// Exercise 7
describe("pushToSelectedPosition", () => {
	const listType = "ul";
	const className = "list";
	const quantity = 7;

	beforeEach(() => {
		document.body.innerHTML = "";
		buildAList(listType, className, quantity);
	});

	test("pushToSelectedPosition should be a function", () => {
		expect(typeof pushToSelectedPosition).toEqual("function");
	});

	test("should push li element", () => {
		const list = document.querySelector(`.${className}`);
		const before = list.querySelectorAll("li").length;
		pushToSelectedPosition("My element", "custom_element", 3);
		const after = list.querySelectorAll("li").length;

		expect(after - before).toEqual(1);
	});

	test("should prepend li element with a class", () => {
		pushToSelectedPosition("My element", "custom_element", 3);
		const list = document.querySelector(`.${className}`);
		const lis = list.querySelectorAll("li");
		const hasLiWithCustomClass = [...lis].some(li =>
			li.classList.contains("custom_element")
		);

		expect(hasLiWithCustomClass).toBe(true);
	});

	test("should prepend li element to correct position", () => {
		pushToSelectedPosition("My element", "custom_element", 3);
		const list = document.querySelector(`.${className}`);
		const lis = list.querySelectorAll("li");

		const targetIndex = [...lis].findIndex(li =>
			li.classList.contains("custom_element")
		);

		expect(targetIndex).toEqual(3);
	});
});

// Exercise 8
describe("deleteSelectedElements", () => {
	const listType = "ul";
	const className = "list";
	const quantity = 7;

	beforeEach(() => {
		document.body.innerHTML = "";
		buildAList(listType, className, quantity);
	});

	test("deleteSelectedElements should be a function", () => {
		expect(typeof deleteSelectedElements).toEqual("function");
	});

	test("should remove elements from selected parent", () => {
		pushToSelectedPosition("My element", "custom_element", 3);
		pushToSelectedPosition("My element", "custom_element", 4);
		const list = document.querySelector(`.${className}`);

		expect(list.querySelectorAll(".custom_element").length).toEqual(2);

		deleteSelectedElements(".list", ".custom_element");

		expect(list.querySelectorAll(".custom_element").length).toEqual(0);
	});
});
