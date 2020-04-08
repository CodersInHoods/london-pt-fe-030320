const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

describe("createTimerEl", () => {
	const timerContainer = createTimerEl(3);

	test("createTimerEl should be a function", () => {
		expect(typeof createTimerEl).toEqual("function");
	});

	test("createTimerEl should return container with unique class", () => {
		const wrapper = Object.values(timerContainer.classList).includes("timer_3");
		expect(wrapper).toBe(true);
	});

	test("createTimerEl should contain element with class 'remove'", () => {
		const wrapper = timerContainer.querySelectorAll(".remove");
		expect(wrapper.length).toEqual(1);
	});

	test("createTimerEl should contain 'h3'", () => {
		const wrapper = timerContainer.querySelectorAll("h3");
		expect(wrapper.length).toEqual(1);
	});

	test("h3 should contain 'span'", () => {
		const wrapper = timerContainer.querySelectorAll("h3 span");
		expect(wrapper.length).toEqual(1);
	});

	test("createTimerEl should contain div with class 'btn'", () => {
		const wrapper = timerContainer.querySelectorAll("div.btn");
		expect(wrapper.length).toEqual(1);
	});

	test(".btn should contain button with class 'reset'", () => {
		const wrapper = timerContainer.querySelectorAll(".btn .reset");
		expect(wrapper.length).toEqual(1);
	});

	test(".btn should contain button with class 'stop'", () => {
		const wrapper = timerContainer.querySelectorAll(".btn .stop");
		expect(wrapper.length).toEqual(1);
	});
});

describe("1. add new timer", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("should add a new timer on '#new_timer' button click", () => {
		fireEvent.click(newTimer);
		expect(Boolean(document.querySelectorAll(".timers .timer_1"))).toBe(true);
	});

	test("shouldn't add a new timer on '#new_timer' button click when 5 exists", () => {
		for (let i = 0; i < 10; i++) {
			fireEvent.click(newTimer);
		}

		expect(document.querySelectorAll(".timers .timer").length).toEqual(5);
	});
});

describe("2. timer should continuously count up", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("should display time elapsed", async () => {
		fireEvent.click(newTimer);

		await new Promise((resolve) => setTimeout(resolve, 2500));

		const firstTimer = document.querySelector(".timers .timer_1");

		const secondsDisplayed = firstTimer.querySelector("h3").textContent.split(" ")[0];

		expect(secondsDisplayed).toBe("2");
	});
});


describe("3. reset timer", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("should reset timer on click", async () => {
		fireEvent.click(newTimer);
		fireEvent.click(newTimer);
		const firstTimer = document.querySelector(".timers .timer_1");
		const firstTimerH3 = firstTimer.querySelector("h3");
		const firstTimerReset = firstTimer.querySelector(".reset");

		await new Promise((resolve) => setTimeout(resolve, 2500));
		expect(firstTimerH3.innerHTML.split(" ")[0]).toEqual("2");

		fireEvent.click(firstTimerReset);
		await new Promise((resolve) => setTimeout(resolve, 100));
		expect(firstTimerH3.innerHTML.split(" ")[0]).toEqual("0");
	});
});

describe("4. stop timer", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("should stop timer on click", async () => {
		fireEvent.click(newTimer);
		fireEvent.click(newTimer);
		const firstTimer = document.querySelector(".timers .timer_1");
		const firstTimerH3 = firstTimer.querySelector("h3");
		const firstTimerStop = firstTimer.querySelector(".stop");

		await new Promise((resolve) => setTimeout(resolve, 1500));
		fireEvent.click(firstTimerStop);
		expect(firstTimerH3.innerHTML.split(" ")[0]).toEqual("1");

		await new Promise((resolve) => setTimeout(resolve, 2000));
		expect(firstTimerH3.innerHTML.split(" ")[0]).toEqual("1");
	});
});

describe("5. remove timer", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("should remove timer on click", () => {
		fireEvent.click(newTimer);
		fireEvent.click(newTimer);

		const firstTimer = document.querySelector(".timers .timer_1");
		const firstTimerCross = firstTimer.querySelector(".remove");
		expect(Boolean(document.querySelector(".timers .timer_1"))).toBe(true);

		fireEvent.click(firstTimerCross);
		expect(Boolean(document.querySelector(".timers .timer_1"))).toBe(false);
		expect(Boolean(document.querySelector(".timers .timer_2"))).toBe(true);
	});
});



describe("6. No more than 5 timers", () => {
	const newTimer = document.querySelector("#new_timer");

	beforeEach(() => {
		document.querySelector(".timers").innerHTML = "";
		timersCount = 0;
	});

	test("shouldn't add a new timer on '#new_timer' button click when 5 already exist", () => {
		for (let i = 0; i < 10; i++) {
			fireEvent.click(newTimer);
		}

		expect(document.querySelectorAll(".timers .timer").length).toEqual(5);
	});
});