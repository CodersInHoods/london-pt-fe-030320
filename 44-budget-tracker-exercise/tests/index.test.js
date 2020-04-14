Object.defineProperty(global.Element.prototype, 'innerText', {
    get() {
      return this.textContent;
    },
    set(str) {
        this.innerHTML = this.textContent = str;
    }
  });

document.body.innerHTML = `
    <nav>
    Emergency Ration Budget Tool
    </nav>
    <main>
        <div id="cart">
            <div id="products">
                <h3>Choose your products</h3>
            </div>
            <div id="remaining">Remaining budget: <span>£50.00</span></div>
        </div>
    </main>
`;

const products = [
  {
    id: 1,
    name: "Hand sanitiser",
    img:
      "https://i5.walmartimages.com/asr/f1728857-3120-4a4e-b474-d66f8ad1bc77_1.7e41f79bcada186bbbc136d1094be906.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff",
    price: 12.99,
    max_quantity: 3,
  },
  {
    id: 2,
    name: "Toilet roll",
    img: "https://images.allianceonline.co.uk/Products/HBTR0010.jpg",
    price: 7.99,
    max_quantity: 4,
  },
  {
    id: 3,
    name: "Pasta",
    img:
      "https://www.italianfoodexperts.com/wp-content/uploads/2017/11/Vera-pasta-italiana.jpg",
    price: 4.99,
    max_quantity: 5,
  },
  {
    id: 4,
    name: "Eggs",
    img:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/why-are-eggs-good-for-you-1296x728-feature.jpg?w=1155&h=1528",
    price: 5.99,
    max_quantity: 2,
  },
];

const productsContainer = document.querySelector("#products");
const budgetView = document.querySelector("#remaining > span")

let budget = 50;
const costs = [];
products.forEach(element => {
    const div = document.createElement(`div`);
    div.id = element.id;
    const img = document.createElement(`img`);
    img.src = element.img;
    const h3 = document.createElement("h3");
    h3.innerText = element.name;
    const p = document.createElement("p");
    p.innerText = element.price;
    select = document.createElement('select');
    for (let index = 0; index < element.max_quantity + 1; index++) {
        option = document.createElement("option");
        option.innerText = index;
        select.appendChild(option);
    }
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(select);
    productsContainer.appendChild(div);
    costs.push(0);
});

document.addEventListener("change", event => {
    const quantity = event.target.value;
    const p = event.target.previousSibling;
    const parent = event.target.parentNode;
    const id = parent.id - 1; // this will be the position of the item in the array.
    let cost = parseFloat(p.innerText);
    const preChangeArray = costs;
    let selection = cost * quantity;
    preChangeArray[id] = selection;
    budget = 50;
    calc = budget - preChangeArray.reduce((a, b) => a + b, 0)
    console.log(preChangeArray[id]);
    console.log(preChangeArray);
    console.log(calc);
    if (calc > 0) {
        costs[id] = selection;
        console.log(costs);
        budget = 50;
        budget = budget - costs.reduce((a, b) => a + b, 0)
        console.log(budget);
        budgetView.innerHTML = `${budget.toFixed(2)}£`
    } else {
        event.target.value = 0;
        const error = document.createElement("div");
        error.className = "error";
        error.innerText = `Not enough money left for that!`;
        productsContainer.appendChild(error);
        removeError = window.setTimeout(() => error.remove(), 3000);

    }
});
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
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("img"))).toBe(true);
    });
  });

  test("each product div contains an h3 tag", () => {
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("h3"))).toBe(true);
    });
  });

  test("each product div contains an p tag", () => {
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("p"))).toBe(true);
    });
  });

  test("each product div contains a select tag", () => {
    productDivs.forEach((productDiv) => {
      expect(Boolean(productDiv.querySelector("select"))).toBe(true);
    });
  });

  test("each product div contains elements in the correct order", () => {
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

    expect(remainingBudgetSpan.innerHTML).toBe(
      `£${budget - firstProduct.price}`
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
    })
  })

  test("selecting products over budget doesn't allow selection", async () => {
    fireEvent.input(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.input(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });

    expect(remainingBudgetSpan.innerHTML).toBe(
      `£${(budget - firstProduct.price * 3).toFixed(2)}`
    );
  });

  test("selecting products over budget displays error message for 3 seconds", async () => {
    fireEvent.input(firstDiv.querySelector("select"), {
      target: { value: "3" },
    });
    fireEvent.input(secondDiv.querySelector("select"), {
      target: { value: "4" },
    });

    expect(Boolean(document.querySelector(".error"))).toBe(true);

    await wait(2500);

    expect(Boolean(document.querySelector(".error"))).toBe(true);
    
    await wait(1000);

    expect(Boolean(document.querySelector(".error"))).toBe(false);
  });
});
