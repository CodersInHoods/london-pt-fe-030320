global.console = {
	log: jest.fn()
};

// Exercise 1
describe("countdown", () => {
	countdown();
	test("countdown is declared", () => {
		expect(Boolean(countdown)).toBe(true);
	});

	test("countdown is a function", () => {
		expect(typeof countdown).toEqual("function");
	});

	test("console.log has been called 11 times", () => {
		expect(global.console.log).toBeCalledTimes(11);
	});

	test("console.log has been called 10 times with 'Remaining: X'", () => {
		for (let i = 0; i < 10; i++) {
			const nth = i + 1;
			const counter = 10 - i;

			expect(global.console.log).toHaveBeenNthCalledWith(
				nth,
				`Remaining: ${counter}`
			);
		}
	});

	test("console.log has been called 1 time with 'Go!'", () => {
		expect(global.console.log).toHaveBeenNthCalledWith(11, "Go!");
	});
});

// Exercise 2
describe("countdownWithParam", () => {
	beforeEach(() => {
		jest.clearAllMocks();
		countdownWithParam(16);
	});
	
	test("countdownWithParam is declared", () => {
		expect(Boolean(countdownWithParam)).toBe(true);
	});

	test("countdownWithParam is a function", () => {
		expect(typeof countdownWithParam).toEqual("function");
	});

	test("console.log has been called 17 times", () => {
		expect(global.console.log).toBeCalledTimes(17);
	});

	test("console.log has been called correct amount of times with 'Remaining: X'", () => {
		for (let i = 0; i < 16; i++) {
			const nth = i + 1;
			const counter = 16 - i;

			expect(global.console.log).toHaveBeenNthCalledWith(
				nth,
				`Remaining: ${counter}`
			);
		}
	});

	test("console.log has been called 1 time with 'Go!'", () => {
		expect(global.console.log).toHaveBeenNthCalledWith(17, "Go!");
	});
});

// Exercise 3
describe("rulerConstructor", () => {
	test("rulerConstructor is declared", () => {
		expect(Boolean(rulerConstructor)).toBe(true);
	});

	test("rulerConstructor is a function", () => {
		expect(typeof rulerConstructor).toEqual("function");
	});

	test("should build a ruler", () => {
		expect(ruler).toEqual([]);
		rulerConstructor()
		expect(ruler).toEqual([0,10,20,30,40,50,60,70,80,90,100]);
	});
});

// Exercise 4
describe("partyPadding", () => {
	test("partyPadding is declared", () => {
		expect(Boolean(partyPadding)).toBe(true);
	});

	test("partyPadding is a function", () => {
		expect(typeof partyPadding).toEqual("function");
	});

	test("partyPadding pads a party", () => {
		const guests = ["Mimi", "Archibald"];
		partyPadding(guests)
		expect(guests).toEqual(["Mimi", "Archibald", "Neighbour", "Neighbour", "Neighbour"]);
	});

	test("partyPadding doesn't pad a party which doesn't need padding", () => {
		const guests = ["Mimi", "Archibald", "Acacia", "Ursula", "Jazmin", "William"];
		partyPadding(guests)
		expect(guests).toEqual(["Mimi", "Archibald", "Acacia", "Ursula", "Jazmin", "William"]);
	});
})