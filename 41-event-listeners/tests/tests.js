const {
	fireEvent
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

globalThis.console = {
	log: jest.fn()
};

// Exercise 1
describe("clickTheButton", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("clickTheButton should be a function", () => {
		expect(typeof clickTheButton).toEqual("function");
	});

	test("should log a message on button click", () => {
		const btn = document.querySelector(".click button");

		expect(global.console.log).not.toHaveBeenCalled();
		clickTheButton();
		btn.click();

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 2
describe("hoverOver", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("hoverOver should be a function", () => {
		expect(typeof hoverOver).toEqual("function");
	});

	test("should log a message when hover over 'a' element", () => {
		const a = document.querySelector(".mouseover a");
		expect(global.console.log).not.toHaveBeenCalled();
		hoverOver();
		fireEvent.mouseOver(a);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 3
describe("handleLeave", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("handleLeave should be a function", () => {
		expect(typeof handleLeave).toEqual("function");
	});

	test("should log a message when cursor leaves 'a' element", () => {
		const a = document.querySelector(".mouseover a");
		expect(global.console.log).not.toHaveBeenCalled();
		handleLeave();
		fireEvent.mouseOut(a);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 4
describe("focusOnMe", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("focusOnMe should be a function", () => {
		expect(typeof focusOnMe).toEqual("function");
	});

	test("should log a message when user focus on input", () => {
		const input = document.querySelector(".input input");
		expect(global.console.log).not.toHaveBeenCalled();
		focusOnMe();
		fireEvent.focus(input);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 5
describe("clickElsewhere", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("clickElsewhere should be a function", () => {
		expect(typeof clickElsewhere).toEqual("function");
	});

	test("should log a message when user click elsewhere", () => {
		const input = document.querySelector(".input input");
		expect(global.console.log).not.toHaveBeenCalled();
		clickElsewhere();
		fireEvent.blur(input);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 6
describe("pressAKey", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("pressAKey should be a function", () => {
		expect(typeof pressAKey).toEqual("function");
	});

	test("should log a message when press a key", () => {
		const input = document.querySelector(".input input");
		expect(global.console.log).not.toHaveBeenCalled();
		pressAKey();
		fireEvent.keyDown(input);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 7
describe("releaseAKey", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("releaseAKey should be a function", () => {
		expect(typeof pressAKey).toEqual("function");
	});

	test("should log a message when release a key", () => {
		const input = document.querySelector(".input input");
		expect(global.console.log).not.toHaveBeenCalled();
		releaseAKey();
		fireEvent.keyUp(input);

		expect(global.console.log).toHaveBeenCalledTimes(1);
	});
});

// Exercise 8
describe("inputToUpperCase", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("inputToUpperCase should be a function", () => {
		expect(typeof inputToUpperCase).toEqual("function");
	});

	test("should convert input value to uppercase", () => {
		const input = document.querySelector(".input input");
		input.value = "random text";
		inputToUpperCase();
		fireEvent.keyUp(input);

		expect(input.value).toEqual(input.value.toUpperCase());
	});
});

// Exercise 9
describe("handleSelectChange", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("handleSelectChange should be a function", () => {
		expect(typeof handleSelectChange).toEqual("function");
	});

	test("should have default value item_1", () => {
		const select = document.querySelector("#items");

		expect(select.value).toEqual("item_1");
	});

	test("should log select value when you change an option", () => {
		const select = document.querySelector("#items");
		handleSelectChange();
		select.value = "item_2";
		fireEvent.change(select);

		expect(global.console.log).toHaveBeenCalledWith("item_2");
	});
});

// Exercise 10
describe("submitFormHandler", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("submitFormHandler should be a function", () => {
		expect(typeof submitFormHandler).toEqual("function");
	});

	test("should log an object with input name as a key and input value as a value", () => {
		const form = document.querySelector("form");
		const formInputs = form.querySelectorAll("input");
		formInputs[0].value = "John";
		formInputs[1].value = "Smith";
		const result = {
			firstName: "John",
			lastName: "Smith"
		};

		submitFormHandler();
		form.submit();

		expect(global.console.log).toHaveBeenCalledWith(result);
	});
});

// Exercise 11
describe("handleScroll", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});
	test("handleScroll should be a function", () => {
		expect(typeof handleScroll).toEqual("function");
	});

	test("should log window vertical scroll position", () => {
		handleScroll();
		fireEvent.scroll(window);

		expect(global.console.log).toHaveBeenCalled();
	});
});
