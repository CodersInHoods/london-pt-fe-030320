const {
  fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

describe("Render body as text", () => {
  test("should render body from a response", async () => {
    fetch = () =>
      new Promise((resolve) =>
        resolve({
          text: () =>
            "74 is the number of stars obtained by SpongeBob SquarePants in his driving school.",
          status: 200,
        })
      );

    input.value = "http://numbersapi.com/random";
    fireEvent.submit(form);
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(result.innerText).toEqual(
      "74 is the number of stars obtained by SpongeBob SquarePants in his driving school."
    );
  });

  test("should reset result", async () => {
    result.innerText = "81 is the number of squares on a shogi playing board.";

    expect(result.innerText).toEqual(
      "81 is the number of squares on a shogi playing board."
    );
    fireEvent.focus(input);
    expect(result.innerText).toEqual("");
  });

  test("should reset input value", async () => {
    input.value = "123 is the medical emergency telephone number in Egypt.";

    expect(input.value).toEqual(
      "123 is the medical emergency telephone number in Egypt."
    );
    fireEvent.focus(input);
    expect(input.value).toEqual("");
  });
});
