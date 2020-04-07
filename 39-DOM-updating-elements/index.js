// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */
const h1 = document.querySelector("h1");

function setTitle(string) {
    h1.innerText = string;
    return h1.innerHTML;
}
/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

const appendToTitle = string => {
    const h1 = document.querySelector("h1");
    h1.innerText = h1.innerText + string;
}

// function appendToTitle(string) {
//     h1.innerHTML = h1.innerHTML + string;
//     return h1.innerHTML;
// }

/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */
const prependToTitle = string => h1.innerText = string + h1.innerText;

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */
const div = document.querySelector("div");

function setInnerHTMLForDiv(tagName, text) {
    const element = document.createElement(tagName);
    element.innerText = text;
    div.appendChild(element);
}


/**
 * Exercise 5
 * create a function {addPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

function pushPtoDivWithText(string) {
    const paragrapgh = document.createElement("p");
    paragrapgh.innerHTML = string;
    div.appendChild(paragrapgh);
}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

const setSrcToImage = (url, imgDesc) => {
        img = document.querySelector("img");
        img.src = url;
        img.alt = imgDesc;
    }
    /**
     * Exercise 7
     *
     * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
     * and some text
     *
     * Find the a tag in the page, set the href to the URL and display the text
     *
     * Also add an attribute that opens your page in a new tab
     */

const setCodersInHoodsLink = (url, text) => {
    const link = document.querySelector("a");
    link.href = url;
    link.innerText = text;
    link.setAttribute('target', '_blank');
}


/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

const disableResetBtn = () => {
    resetButton = document.querySelector(".reset");
    resetButton.disabled = true;
}

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */
const disableBtns = clsname => {
    const allBtn = document.querySelectorAll(`.` + clsname);
    for (let key of allBtn) {
        key.disabled = true;
    }
}

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

function addClassToLi() {
    const listOfClasses = document.querySelectorAll("ul.list > li");
    let i = 1;
    for (let item of listOfClasses) {
        item.className = `list_item_${i}`;
        i++;
    }
}
/**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */
function removeListItemClass() {
    const listItems = document.querySelectorAll("li");
    for (let item of listItems) {
        item.classList.remove(`list_item`);
    }
}
/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

function addID(ident, selector) {
    const selected = document.querySelector(selector);
    selected.id = ident;
}

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

function setStyles(proper, val, selector) {
    elements = document.querySelectorAll(selector);
    for (let item of elements) {
        item.style[proper] = val;
    }
}