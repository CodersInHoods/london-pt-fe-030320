const messageForm = document.getElementById("message-form");

const alltheps = document.getElementsByTagName("p");

const allTheBigs = document.getElementsByClassName("big");
const allTheBigErrors = document.getElementsByClassName("big error");

// const emailField = document.querySelector(
//   "input[placeholder='Enter your email address']"
// );

const firstTDs = document.querySelectorAll("td:first-child");

const errorUlDescendents = document.querySelectorAll("ul .error");

const div = document.createElement("div");

div.innerText = "i;m a div";
div.className = "big";

document.body.append(div);

const ul = document.querySelector("ul");

const addNewListItem = content => {
  const newListItem = document.createElement("li");

  newListItem.innerText = content;

  const newlyAddedMessage = document.createElement("span");

  newlyAddedMessage.innerText = "NEW!!!!";

  newListItem.append(newlyAddedMessage);

  setTimeout(() => newlyAddedMessage.remove(), 1500);

  ul.append(newListItem);
};

addNewListItem("new list item content");
addNewListItem("newer list item content");
addNewListItem("newest list item content");
addNewListItem("fsorihgdkju");
addNewListItem("fsorihgdkjupiregoudr");

// setInterval(() => {
//   addNewListItem("NEW LIST ITEM ADDED EVERY SECOND");
// }, 1000);

const form = document.createElement("form");

const inputField = document.createElement("input");
const emailField = document.createElement("input");
emailField.type = "email";
const submitButton = document.createElement("input");
submitButton.type = "submit";

form.append(inputField, emailField, submitButton);

document.body.append(form);

// setTimeout(() => {
//   messageForm.remove();
// }, 2000);

const newListItemInputField = document.createElement("input");
ul.insertAdjacentElement("afterend", newListItemInputField);

setInterval(() => {
  if (newListItemInputField.value.length > 0) {
    addNewListItem(newListItemInputField.value);
    newListItemInputField.value = "";
  }
}, 1000);

const allTheLisItems = document.querySelectorAll("li");

console.log(allTheLisItems);

// setInterval(() => {
//   document.querySelectorAll("li").forEach(listItem => listItem.remove());
// }, 10000);
