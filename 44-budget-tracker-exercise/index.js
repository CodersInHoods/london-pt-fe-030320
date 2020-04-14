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