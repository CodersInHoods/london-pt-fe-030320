// Exercise 1
describe("setTitle", () => {
	test("setTitle should be a function", () => {
		expect(typeof setTitle).toEqual("function");
	});

	test("h1 should not contain any text", () => {
		const h1 = document.querySelector("h1");
		expect(h1.innerText).toEqual(undefined);
	});

	test("setTitle should set text to h1", () => {
		const h1 = document.querySelector("h1");
		setTitle("Test");

		expect(h1.innerText).toEqual("Test");
	});
});

// Exercise 2
describe("appendToTitle", () => {
	test("appendToTitle should be a function", () => {
		expect(typeof appendToTitle).toEqual("function");
	});

	test("appendToTitle should append text to h1", () => {
		const h1 = document.querySelector("h1");
		appendToTitle(" Test");

		expect(h1.innerText).toEqual("Test Test");
	});
});

// Exercise 3
describe("prependToTitle", () => {
	test("prependToTitle should be a function", () => {
		expect(typeof prependToTitle).toEqual("function");
	});

	test("prependToTitle should prepend text to h1", () => {
		const h1 = document.querySelector("h1");
		prependToTitle("Kitten ");

		expect(h1.innerText).toEqual("Kitten Test Test");
	});
});

// Exercise 4
describe("setInnerHTMLForDiv", () => {
	test("setInnerHTMLForDiv should be a function", () => {
		expect(typeof setInnerHTMLForDiv).toEqual("function");
	});

	test("setInnerHTMLForDiv should add 'span' tag with text 'Hello'", () => {
		const div = document.querySelector("div");
		setInnerHTMLForDiv("span", "Hello");

		expect(div.innerHTML).toEqual("<span>Hello</span>");
	});
});

// Exercise 5
describe("pushPtoDivWithText", () => {
	test("pushPtoDivWithText should be a function", () => {
		expect(typeof pushPtoDivWithText).toEqual("function");
	});

	test("pushPtoDivWithText should add 'p' tag with text 'Hi again'", () => {
		const div = document.querySelector("div");
		pushPtoDivWithText("Hi again");

		expect(div.innerHTML).toEqual("<span>Hello</span><p>Hi again</p>");
	});
});

// Exercise 6
describe("setSrcToImage", () => {
	test("setSrcToImage should be a function", () => {
		expect(typeof setSrcToImage).toEqual("function");
	});

	test("setSrcToImage should set 'src' and 'alt' attributes for image", () => {
		const img = document.querySelector("img");
		setSrcToImage("http://kittenworld.com/1.jpg", "kitten");

		expect(img.src).toEqual("http://kittenworld.com/1.jpg");
		expect(img.alt).toEqual("kitten");
	});
});

// Exercise 7
describe("setCodersInHoodsLink", () => {
	test("setCodersInHoodsLink should be a function", () => {
		expect(typeof setCodersInHoodsLink).toEqual("function");
	});

	test("setCodersInHoodsLink should set href, text and open in a new window attribute", () => {
		const a = document.querySelector("a");
		setCodersInHoodsLink("http://codersinhoods.dev", "CodersInHoods Official");

		expect(a.href).toEqual("http://codersinhoods.dev/");
		expect(a.innerText).toEqual("CodersInHoods Official");
		expect(a.target).toEqual("_blank");
	});
});

// Exercise 8
describe("disableResetBtn", () => {
	test("disableResetBtn should be a function", () => {
		expect(typeof disableResetBtn).toEqual("function");
	});

	test("disableResetBtn should disable reset button", () => {
		const resetBtn = document.querySelector(".reset");

		expect(resetBtn.disabled).toBe(false);
		disableResetBtn();
		expect(resetBtn.disabled).toBe(true);
	});
});

// Exercise 9
describe("disableBtns", () => {
	test("disableBtns should be a function", () => {
		expect(typeof disableBtns).toEqual("function");
	});

	test("disableBtns should disable selected buttons", () => {
		const submitBtns = document.querySelectorAll(".submit");

		submitBtns.forEach(btn => expect(btn.disabled).toBe(false));
		disableBtns("submit");
		submitBtns.forEach(btn => expect(btn.disabled).toBe(true));
	});
});

// Exercise 10
describe("addClassToLi", () => {
	test("addClassToLi should be a function", () => {
		expect(typeof addClassToLi).toEqual("function");
	});

	test("addClassToLi should add list_item_$ to li elements inside .list", () => {
		const listItems = document.querySelectorAll(".list li");
		const anotherList = document.querySelectorAll(".another_list li");

		listItems.forEach((li, i) =>
			expect([...li.classList].includes(`list_item_${i}`)).toBe(false)
		);
		addClassToLi();
		listItems.forEach((li, i) =>
			expect([...li.classList].includes(`list_item_${i}`)).toBe(true)
		);
		anotherList.forEach((li, i) =>
			expect([...li.classList].includes(`list_item_${i}`)).toBe(false)
		);
	});
});

// Exercise 11
describe("removeListItemClass", () => {
	test("removeListItemClass should be a function", () => {
		expect(typeof removeListItemClass).toEqual("function");
	});

	test("removeListItemClass should remove class 'list_item' from all elements", () => {
		expect(document.querySelectorAll(".list_item").length).toBeGreaterThan(0);
		removeListItemClass();
		expect(document.querySelectorAll(".list_item").length).toEqual(0);
	});
});

// Exercise 12
describe("addId", () => {
	test("addId should be a function", () => {
		expect(typeof addId).toEqual("function");
	});

	test("addId should add id to selected element", () => {
		const list = document.querySelector(".list");

		expect(list.id).toEqual("");
		addId("kitten", ".list");
		expect(list.id).toEqual("kitten");
	});
});

// Exercise 13
describe("setStyles", () => {
	test("setStyles should be a function", () => {
		expect(typeof setStyles).toEqual("function");
	});

	test("setStyles should set style to selected element", () => {
		const listItems = document.querySelectorAll("li");

		listItems.forEach(li => expect(li.style.background).toEqual(""));
		setStyles("background", "green", "li");
		listItems.forEach(li => expect(li.style.background).toEqual("green"));
		setStyles("color", "white", "li");
		listItems.forEach(li => expect(li.style.color).toEqual("white"));
	});
});
