// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const body = document.querySelector("body");

const createDOMElement = tag =>
    tag = document.createElement(tag);

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */


const addPTag = text => {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    body.append(paragraph);
}

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

function addElementWithClass(x, y, z) {
    const el = document.createElement(x);
    el.innerText = y;
    el.className = z;
    body.append(el);
}

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

function addElementWithMultipleClasses(tagName, text, classes) {
    el = createDOMElement(tagName);
    el.innerText = text;
    let elClass = el.className;
    for (key of classes) {
        elClass += ` ` + key;
    }
    el.className = elClass;
    body.append(el);
}
/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

function buildAList(tagName, classText, numz) {
    const element = document.createElement(tagName);
    element.className = classText;
    body.append(element);
    const listParent = document.querySelector(tagName)
    for (let index = 0; index < numz; index++) {
        const listIt = document.createElement("li");
        listIt.innerText = `Item ${index}`;
        listParent.append(listIt);
    }
}



/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

function prependLiToList(texto, classNamez) {
    const listItem = document.createElement("li");
    listItem.innerText = texto;
    listItem.className = classNamez;
    const list = document.querySelector("ol,ul")
    list.prepend(listItem);
}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

function pushToSelectedPosition(text, classNAme, index) {
    const listItem = document.createElement("li");
    listItem.className = classNAme;
    listItem.innerText = text;
    const list = document.querySelector("ol,ul");
    const items = list.getElementsByTagName("li");
    Placebefore = items[index];
    list.insertBefore(listItem, Placebefore);
}

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

function deleteSelectedElements(parent, elements) {
    const father = document.querySelector(parent);
    const list = father.querySelectorAll(elements);
    for (key of list) {
        key.remove();
    }
}