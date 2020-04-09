document.body.innerHTML = `
<h1></h1>
<div>
    <span>div</span>
</div>
<img src="" alt="" />
<a href="http://googe.com">Go to Google</a>
<div class="btns">
    <button class="submit">Submit</button>
    <button class="submit">One more submit</button>
    <button class="reset">Reset</button>
</div>
<ul class="list">
    <li class="list_item">Item 1</li>
    <li class="list_item">Item 2</li>
    <li class="list_item">Item 3</li>
</ul>

<ul class="another_list">
    <li class="list_item">Item 1</li>
    <li class="list_item">Item 2</li>
    <li class="list_item">Item 3</li>
</ul>
`;

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
 * passed into the function`
 */
const div = document.querySelector("div");

function setInnerHTMLForDiv(tagName, inText) {
    div.innerHTML = `<${tagName}>${inText}</${tagName}`;
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
    let i = 0;
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

function addId(ident, selector) {
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
// Exercise 1
describe("setTitle", () => {
    test("setTitle should be a function", () => {
        expect(typeof setTitle).toEqual("function");
    });

    test("h1 should not contain any text", () => {
        const h1 = document.querySelector("h1");
        expect(h1.innerText).toEqual(undefined);
    });

    test("setTitle should set text to h1", () => {
        const h1 = document.querySelector("h1");
        setTitle("Test");

        expect(h1.innerText).toEqual("Test");
    });
});

// Exercise 2
describe("appendToTitle", () => {
    test("appendToTitle should be a function", () => {
        expect(typeof appendToTitle).toEqual("function");
    });

    test("appendToTitle should append text to h1", () => {
        const h1 = document.querySelector("h1");
        appendToTitle(" Test");

        expect(h1.innerText).toEqual("Test Test");
    });
});

// Exercise 3
describe("prependToTitle", () => {
    test("prependToTitle should be a function", () => {
        expect(typeof prependToTitle).toEqual("function");
    });

    test("prependToTitle should prepend text to h1", () => {
        const h1 = document.querySelector("h1");
        prependToTitle("Kitten ");

        expect(h1.innerText).toEqual("Kitten Test Test");
    });
});

// Exercise 4
describe("setInnerHTMLForDiv", () => {
    test("setInnerHTMLForDiv should be a function", () => {
        expect(typeof setInnerHTMLForDiv).toEqual("function");
    });

    test("setInnerHTMLForDiv should add 'span' tag with text 'Hello'", () => {
        const div = document.querySelector("div");
        setInnerHTMLForDiv("span", "Hello");
        console.log(div.innerHTML)
        expect(div.innerHTML).toEqual("<span>Hello</span>");
    });
});

// Exercise 5
describe("pushPtoDivWithText", () => {
    test("pushPtoDivWithText should be a function", () => {
        expect(typeof pushPtoDivWithText).toEqual("function");
    });

    test("pushPtoDivWithText should add 'p' tag with text 'Hi again'", () => {
        const div = document.querySelector("div");
        pushPtoDivWithText("Hi again");

        expect(div.innerHTML).toEqual("<span>Hello</span><p>Hi again</p>");
    });
});

// Exercise 6
describe("setSrcToImage", () => {
    test("setSrcToImage should be a function", () => {
        expect(typeof setSrcToImage).toEqual("function");
    });

    test("setSrcToImage should set 'src' and 'alt' attributes for image", () => {
        const img = document.querySelector("img");
        setSrcToImage("http://kittenworld.com/1.jpg", "kitten");

        expect(img.src).toEqual("http://kittenworld.com/1.jpg");
        expect(img.alt).toEqual("kitten");
    });
});

// Exercise 7
describe("setCodersInHoodsLink", () => {
    test("setCodersInHoodsLink should be a function", () => {
        expect(typeof setCodersInHoodsLink).toEqual("function");
    });

    test("setCodersInHoodsLink should set href, text and open in a new window attribute", () => {
        const a = document.querySelector("a");
        setCodersInHoodsLink("http://codersinhoods.dev", "CodersInHoods Official");

        expect(a.href).toEqual("http://codersinhoods.dev/");
        expect(a.innerText).toEqual("CodersInHoods Official");
        expect(a.target).toEqual("_blank");
    });
});

// Exercise 8
describe("disableResetBtn", () => {
    test("disableResetBtn should be a function", () => {
        expect(typeof disableResetBtn).toEqual("function");
    });

    test("disableResetBtn should disable reset button", () => {
        const resetBtn = document.querySelector(".reset");

        expect(resetBtn.disabled).toBe(false);
        disableResetBtn();
        expect(resetBtn.disabled).toBe(true);
    });
});

// Exercise 9
describe("disableBtns", () => {
    test("disableBtns should be a function", () => {
        expect(typeof disableBtns).toEqual("function");
    });

    test("disableBtns should disable selected buttons", () => {
        const submitBtns = document.querySelectorAll(".submit");

        submitBtns.forEach(btn => expect(btn.disabled).toBe(false));
        disableBtns("submit");
        submitBtns.forEach(btn => expect(btn.disabled).toBe(true));
    });
});

// Exercise 10
describe("addClassToLi", () => {
    test("addClassToLi should be a function", () => {
        expect(typeof addClassToLi).toEqual("function");
    });

    test("addClassToLi should add list_item_$ to li elements inside .list", () => {
        const listItems = document.querySelectorAll(".list li");
        const anotherList = document.querySelectorAll(".another_list li");

        listItems.forEach((li, i) =>
            expect([...li.classList].includes(`list_item_${i}`)).toBe(false)
        );
        addClassToLi();
        listItems.forEach((li, i) =>
            expect([...li.classList].includes(`list_item_${i}`)).toBe(true)
        );
        anotherList.forEach((li, i) =>
            expect([...li.classList].includes(`list_item_${i}`)).toBe(false)
        );
    });
});

// Exercise 11
describe("removeListItemClass", () => {
    test("removeListItemClass should be a function", () => {
        expect(typeof removeListItemClass).toEqual("function");
    });

    test("removeListItemClass should remove class 'list_item' from all elements", () => {
        expect(document.querySelectorAll(".list_item").length).toBeGreaterThan(0);
        removeListItemClass();
        expect(document.querySelectorAll(".list_item").length).toEqual(0);
    });
});

// Exercise 12
describe("addId", () => {
    test("addId should be a function", () => {
        expect(typeof addId).toEqual("function");
    });

    test("addId should add id to selected element", () => {
        const list = document.querySelector(".list");

        expect(list.id).toEqual("");
        addId("kitten", ".list");
        expect(list.id).toEqual("kitten");
    });
});

// Exercise 13
describe("setStyles", () => {
    test("setStyles should be a function", () => {
        expect(typeof setStyles).toEqual("function");
    });

    test("setStyles should set style to selected element", () => {
        const listItems = document.querySelectorAll("li");

        listItems.forEach(li => expect(li.style.background).toEqual(""));
        setStyles("background", "green", "li");
        listItems.forEach(li => expect(li.style.background).toEqual("green"));
        setStyles("color", "white", "li");
        listItems.forEach(li => expect(li.style.color).toEqual("white"));
    });
});