const {
	fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

// Exercise #
describe("ROT13", () => {
	const inputEl = document.querySelector("textarea");
	const encryptBtnEl = document.querySelector("#encrypt");
	const decryptBtnEl = document.querySelector("#decrypt");
	const resultEl = document.querySelector(".result");

	test("on click of #encrypt should encrypt input value", () => {
		inputEl.value = "Some random text!";

		fireEvent.click(encryptBtnEl);
		expect(resultEl.innerHTML).toEqual("Fbzr enaqbz grkg!");
	});

	test("on click of #decrypt should decrypt input value", () => {
		inputEl.value = "Fbzr enaqbz grkg arrqf gb or qrpelcgrq!";

		fireEvent.click(decryptBtnEl);
		expect(resultEl.innerHTML).toEqual(
			"Some random text needs to be decrypted!"
		);
	});
});
