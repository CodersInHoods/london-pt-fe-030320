global.console = {
	log: jest.fn()
};

// Exercise 1
describe("paragraphs", () => {
	test("paragraphs should be declared", () => {
		expect(Boolean(paragraphs)).toBe(true);
	});

	test("paragraphs should be an array with DOM elements", () => {
		const isAllNodes = [...paragraphs].every(p => p instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("paragraphs should be an array with p elements", () => {
		const isAllP = [...paragraphs].every(
			p => p.tagName.toLocaleLowerCase() === "p"
		);
		expect(isAllP).toBe(true);
	});

	test("paragraphs should has 6 elements", () => {
		expect(paragraphs.length).toEqual(6);
	});
});

// Exercise 2
describe("firstParagraph", () => {
	test("firstParagraph should be declared", () => {
		expect(Boolean(firstParagraph)).toBe(true);
	});

	test("firstParagraph should be the DOM element", () => {
		const isNode = firstParagraph instanceof HTMLElement;
		expect(isNode).toBe(true);
	});

	test("firstParagraph should be p element", () => {
		expect(firstParagraph.tagName.toLocaleLowerCase()).toEqual("p");
	});
});

// Exercise 3
describe("logAllParagraphs", () => {
	test("logAllParagraphs should be a function", () => {
		expect(typeof logAllParagraphs).toEqual("function");
	});

	test("logAllParagraphs log each p tag", () => {
		logAllParagraphs();

		[...paragraphs].forEach((p, index) => {
			expect(global.console.log).toHaveBeenNthCalledWith(index + 1, p);
		});
	});
});

// Exercise 4
describe("textElements", () => {
	test("textElements should be declared", () => {
		expect(Boolean(textElements)).toBe(true);
	});

	test("textElements should be an array with DOM elements", () => {
		const isAllNodes = [...textElements].every(el => el instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("each element should has class 'text'", () => {
		const isAllNodesWithClassText = [...textElements].every(el =>
			[...el.classList].includes("text")
		);
		expect(isAllNodesWithClassText).toBe(true);
	});
});

// Exercise 5
describe("greenText", () => {
	test("greenText should be declared", () => {
		expect(Boolean(greenText)).toBe(true);
	});

	test("greenText should be an array with DOM elements", () => {
		const isAllNodes = [...greenText].every(el => el instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("each element should has class 'text' and 'green'", () => {
		const isAllNodesWithClassTextAndGreen = [...greenText].every(
			el =>
				[...el.classList].includes("text") &&
				[...el.classList].includes("green")
		);
		expect(isAllNodesWithClassTextAndGreen).toBe(true);
	});
});

// Exercise 6
describe("thirdText", () => {
	test("thirdText should be declared", () => {
		expect(Boolean(thirdText)).toBe(true);
	});

	test("thirdText should be the DOM element", () => {
		expect(thirdText instanceof HTMLElement).toBe(true);
	});

	test("element should has id 'kitten'", () => {
		expect(thirdText.id).toEqual("kitten");
	});
});

// Exercise 7
describe("fourthListElement", () => {
	test("fourthListElement should be declared", () => {
		expect(Boolean(fourthListElement)).toBe(true);
	});

	test("fourthListElement should be the DOM element", () => {
		expect(fourthListElement instanceof HTMLElement).toBe(true);
	});

	test("element should be the fourth li", () => {
		expect(fourthListElement.nextElementSibling.id).toEqual("test-5");
	});
});

// Exercise 8
describe("listElements", () => {
	test("listElements should be declared", () => {
		expect(Boolean(listElements)).toBe(true);
	});

	test("listElements should be an array with DOM elements", () => {
		const isAllNodes = [...listElements].every(li => li instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("listElements should be an array with li elements", () => {
		const isAllLi = [...listElements].every(
			li => li.tagName.toLocaleLowerCase() === "li"
		);
		expect(isAllLi).toBe(true);
	});

	test("listElements should has 5 elements", () => {
		expect(listElements.length).toEqual(5);
	});
});

// Exercise 9
describe("communityElements", () => {
	test("communityElements should be declared", () => {
		expect(Boolean(communityElements)).toBe(true);
	});

	test("communityElements should be an array with DOM elements", () => {
		const isAllNodes = [...communityElements].every(
			el => el instanceof HTMLElement
		);
		expect(isAllNodes).toBe(true);
	});

	test("communityElements should be an array of elements with data-community-name", () => {
		const isAllCommunityElements = [...communityElements].every(
			el => el.dataset.communityName === "codersinhoods"
		);
		expect(isAllCommunityElements).toBe(true);
	});

	test("communityElements should has 2 elements", () => {
		expect(communityElements.length).toEqual(2);
	});
});

// Exercise 10
describe("elementsForTesting", () => {
	test("elementsForTesting should be declared", () => {
		expect(Boolean(elementsForTesting)).toBe(true);
	});

	test("elementsForTesting should be an array with DOM elements", () => {
		const isAllNodes = [...elementsForTesting].every(el => el instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("each element should has class 'test'", () => {
		const isAllNodesWithClassTest = [...elementsForTesting].every(
			el =>
				[...el.classList].includes("test")
		);
		expect(isAllNodesWithClassTest).toBe(true);
	});

	test("elementsForTesting should has 2 elements", () => {
		expect(elementsForTesting.length).toEqual(2);
	});
});

// Exercise 11
describe("fifthTest", () => {
	test("fifthTest should be declared", () => {
		expect(Boolean(fifthTest)).toBe(true);
	});

	test("fifthTest should be the DOM element", () => {
		expect(fifthTest instanceof HTMLElement).toBe(true);
	});

	test("element should has id 'test-5'", () => {
		expect(fifthTest.id).toEqual("test-5");
	});
});

// Exercise 12
describe("nextElements", () => {
	test("nextElements should be declared", () => {
		expect(Boolean(nextElements)).toBe(true);
	});

	test("nextElements should be an array with DOM elements", () => {
		const isAllNodes = [...nextElements].every(el => el instanceof HTMLElement);
		expect(isAllNodes).toBe(true);
	});

	test("each element should be straight after the elements with class 'links'", () => {
		const afterLinks = [...nextElements].every(
			el =>
				[...el.previousElementSibling.classList].includes("links")
		);
		expect(afterLinks).toBe(true);
	});
});