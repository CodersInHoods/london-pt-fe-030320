const headerElement = document.querySelector("h1");

headerElement.addEventListener("click", () => {
  console.log("header was clicked");
});

const allHeaders = document.querySelectorAll("h1, h2, h3, h4, h5");

allHeaders.forEach(header => {
  header.addEventListener("click", () => {
    console.log("another header was clicked");
  });
});

const googleLink = document.querySelector('a[href="https://google.com"]');

googleLink.addEventListener("click", () => {
  alert("please don't leave");
});

const contactQuery = {};

const handleInputChange = event => {
  console.log("event was fired from", event.target.name);
  console.log("something has changed", event.target.value);

  contactQuery[event.target.name] = event.target.value;
};

const form = document.querySelector("form#message-form");

form.addEventListener("input", handleInputChange);

const expectedContactKeys = ["name", "age", "email", "message", "nickname"];

form.addEventListener("submit", event => {
  const currentContactKeys = Object.keys(contactQuery);

  const allKeysIncluded = expectedContactKeys.every(key =>
    currentContactKeys.includes(key)
  );

  if (!allKeysIncluded) {
    event.preventDefault();
    alert("oops i think  you missed something");
  }
});

const ul = document.querySelector("ul");

ul.addEventListener("mouseover", event => {
  event.stopPropagation();
  console.log("set tot black", event);
  event.target.style.background = "black";
});

document.addEventListener("mouseover", event => {
  console.log("set tot pink");
  event.target.style.background = "pink";
});

const items = ul.querySelectorAll("li");

const listItemDataForm = document.querySelector("#list-item-data");
const listItemTextInput = listItemDataForm.querySelector('input[name="text"]');

items.forEach(itemElement => {
  itemElement.addEventListener("click", () => {
    listItemTextInput.value = itemElement.innerText;

    // const submitHandler = event => {
    //   event.preventDefault();

    //   itemElement.innerText = listItemTextInput.value;

    //   listItemTextInput.value = "";

    //   listItemDataForm.removeEventListener("submit", submitHandler);
    // };

    // listItemDataForm.addEventListener("submit", submitHandler);

    listItemDataForm.onsubmit = event => {
      event.preventDefault();

      itemElement.innerText = listItemTextInput.value;

      listItemTextInput.value = "";

      listItemDataForm.onsubmit = null;
    };
  });
});

document.addEventListener("scroll", event => {
  console.log(window.scrollY);
  //   document.body.style.background = window.scrollY % 2 === 0 ? "black" : "white";
});

document.addEventListener("keydown", event => {
  console.log(event);
});

window.addEventListener(
  "deviceorientation",
  event => {
    // alpha: rotation around z-axis
    var rotateDegrees = event.alpha;
    // gamma: left to right
    var leftToRight = event.gamma;
    // beta: front back motion
    var frontToBack = event.beta;

    handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
  },
  true
);

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  console.log(frontToBack, leftToRight, rotateDegrees);
};

document.addEventListener("visibilitychange", () => {
  document.title = "please come back and spend money";
});
