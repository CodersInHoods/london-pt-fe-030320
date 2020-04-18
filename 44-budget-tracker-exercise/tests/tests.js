const {
  fireEvent,
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const productDivs = document.querySelectorAll("#products > div");
const remainingBudgetSpan = document.querySelector("#remaining > span");

describe("1. Products rendered", () => {
  test("4 products rendered", () => {
    expect(productDivs.length).toBe(products.length);
  });

  test("each product div contains an img tag", () => {
    expect(productDivs.length).toBeGreaterThan(0);
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("img"))).toBe(true);
    });
  });

  test("each product div contains an h3 tag", () => {
    expect(productDivs.length).toBeGreaterThan(0);
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("h3"))).toBe(true);
    });
  });

  test("each product div contains an p tag", () => {
    expect(productDivs.length).toBeGreaterThan(0);
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("p"))).toBe(true);
    });
  });

  test("each product div contains a select tag", () => {
    expect(productDivs.length).toBeGreaterThan(0);
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("select"))).toBe(true);
    });
  });

  test("each product div contains elements in the correct order", () => {
    expect(productDivs.length).toBeGreaterThan(0);
    productDivs.forEach((productDiv) => {
      expect([...productDiv.children].map((el) => el.tagName)).toEqual([
        "IMG",
        "H3",
        "P",
        "SELECT",
      ]);
    });
  });
});

describe("2. Dropdowns to select quantity", () => {
  test("each product dropdown contains the correct options", () => {
    products.forEach((product, i) => {
      const options = productDivs[i].querySelectorAll("option");
      const optionValues = [...options].map((option) => option.innerText);
      const expectedOptionValues = [];
      for (let index = 0; index <= product.max_quantity; index++) {
        expectedOptionValues.push(index.toString());
      }

      expect(optionValues).toEqual(expectedOptionValues);
    });
  });
});

describe("3. Budget updates", () => {
  const firstDiv = productDivs[0];
  const firstProduct = products[0];

  test("selecting some of any product updates the budget displayed", async () => {
    fireEvent.input(firstDiv.querySelector("select"), {
      target: { value: "1" },
    });
    fireEvent.change(firstDiv.querySelector("select"), {
      target: { value: "1" },
    });

    expect(remainingBudgetSpan.innerHTML).toBe(
      "£37.01"
    );
  });
});

describe("4. Budget limit", () => {
  const [firstDiv, secondDiv] = productDivs;
  const [firstProduct] = products;

  beforeAll(() => {
    productDivs.forEach(productDiv => {
      fireEvent.input(productDiv.querySelector("select"), {
        target: { value: "0" },
      });
      fireEvent.change(productDiv.querySelector("select"), {
        target: { value: "0" },
      });
    })
  })

  test("selecting products over budget doesn't allow selection", async () => {
    fireEvent.input(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.input(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });
    fireEvent.change(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.change(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });

    expect(remainingBudgetSpan.innerHTML).toBe("£11.03");
  });

  test("selecting products over budget displays error message for 3 seconds", async () => {
    fireEvent.input(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.input(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });
    fireEvent.change(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.change(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });

    expect(Boolean(document.querySelector(".error"))).toBe(true);

    await wait(2500);

    expect(Boolean(document.querySelector(".error"))).toBe(true);
    
    await wait(1000);

    expect(Boolean(document.querySelector(".error"))).toBe(false);
  });
});
