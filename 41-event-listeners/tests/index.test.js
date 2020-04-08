document.body.innerHTML = `<h1>Event Listeners</h1>
<div class="click">
    <h4>Click exercise</h4>
    <button>Click Me</button>
</div>
<div class="mouseover">
    <h4>Mouse over exercise</h4>
    <a href="#">Hover on me</a>
</div>

<div class="input">
    <h4>Handle input events</h4>
    <input type="text" placeholder="Type here...">
</div>

<div class="select">
    <h4>Handle select change</h4>
    <select name="items" id="items">
        <option value="item_1">Item 1</option>
        <option value="item_2">Item 2</option>
        <option value="item_3">Item 3</option>
        <option value="item_4">Item 4</option>
        <option value="item_5">Item 5</option>
    </select>
</div>

<form action="#">
    <h4>Handle form submit</h4>
    <input type="text" placeholder="First name" name="firstName">
    <input type="text" placeholder="Last name" name="lastName">
    <button type="submit">Submit</button>
</form>`;

// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const button = document.querySelector("div.click > button");

function clickTheButton() {
    button.addEventListener("click", () => {
        console.log("click happened")
    })
}

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */
const a = document.querySelector("div.mouseover > a");

function hoverOver() {
    a.addEventListener("mouseover", () => {
        console.log("a message for the masses");
    })
}
/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */
function handleLeave() {
    a.addEventListener("mouseout", () => {
        console.log("a message for the leaving mouses");
    })
}

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const input = document.querySelector("div.input > input");

function focusOnMe() {
    input.addEventListener("focus", () => {
        console.log("i am just a humble focus message")
    })
}
/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */


function clickSomewhereElse() {
    input.addEventListener("focus", (event) => {
        targetEl = event.target;
        document.addEventListener("click", (eve) => {
            if (targetEl !== eve.target) {
                console.log("somewhere else")
            }
        })
    })
}

function clickElsewhere() {
    input.addEventListener("focus", (event) => {
        input.addEventListener("blur", () => {
            console.log("somewhere else")

        })
    })
}
/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

function pressAKey() {
    input.addEventListener("focus", () => {
        input.addEventListener("keyDown", (eve) => {
            console.log("key pressed: " + eve.key)
        })
    })
}

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function releaseAKey() {
    input.addEventListener("focus", () => {
        input.addEventListener("keyUp", (eve) => {
            console.log("key pressed: " + eve.key)

        })
    })
}

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */
function inputToUpperCase() {
    input.addEventListener("focus", (event) => {
        input.addEventListener("keyDown", () => {
            input.addEventListener("keyUp", (eve) => {
                text = eve.target;
                text.value = text.value.toUpperCase();

            })

        })
    })
}

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */
items = document.querySelector("#items");

function handleSelectChange() {
    items.addEventListener("change", () => {
        console.log(items.value)
    })
}

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */
const formInput = document.querySelectorAll("form > input")
const form = document.querySelector("form");

function submitFormHandler() {
    form.addEventListener("submit", () => {
        event.preventDefault();
        const object = {};
        for (key of formInput) {
            object[key.name] = key.value;
        }
        console.log(object);
    })
}
/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

const handleScroll = () => {
    document.addEventListener("scroll", () => {
        console.log(window.scrollY);
    })
}
const {
    fireEvent
} = require("@testing-library/dom/dist/@testing-library/dom.umd.js");

global.console = {
    log: jest.fn()
};

// Exercise 1
describe("clickTheButton", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("clickTheButton should be a function", () => {
        expect(typeof clickTheButton).toEqual("function");
    });

    test("should log a message on button click", () => {
        const btn = document.querySelector(".click button");

        expect(global.console.log).not.toHaveBeenCalled();
        clickTheButton();
        btn.click();

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 2
describe("hoverOver", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("hoverOver should be a function", () => {
        expect(typeof hoverOver).toEqual("function");
    });

    test("should log a message when hover over 'a' element", () => {
        const a = document.querySelector(".mouseover a");
        expect(global.console.log).not.toHaveBeenCalled();
        hoverOver();
        fireEvent.mouseOver(a);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 3
describe("handleLeave", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("handleLeave should be a function", () => {
        expect(typeof handleLeave).toEqual("function");
    });

    test("should log a message when cursor leaves 'a' element", () => {
        const a = document.querySelector(".mouseover a");
        expect(global.console.log).not.toHaveBeenCalled();
        handleLeave();
        fireEvent.mouseOut(a);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 4
describe("focusOnMe", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("focusOnMe should be a function", () => {
        expect(typeof focusOnMe).toEqual("function");
    });

    test("should log a message when user focus on input", () => {
        const input = document.querySelector(".input input");
        expect(global.console.log).not.toHaveBeenCalled();
        focusOnMe();
        fireEvent.focus(input);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 5
describe("clickElsewhere", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("clickElsewhere should be a function", () => {
        expect(typeof clickElsewhere).toEqual("function");
    });

    test("should log a message when user click elsewhere", () => {
        const input = document.querySelector(".input input");
        expect(global.console.log).not.toHaveBeenCalled();
        clickElsewhere();
        fireEvent.blur(input);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 6
describe("pressAKey", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("pressAKey should be a function", () => {
        expect(typeof pressAKey).toEqual("function");
    });

    test("should log a message when press a key", () => {
        const input = document.querySelector(".input input");
        expect(global.console.log).not.toHaveBeenCalled();
        pressAKey();
        fireEvent.keyDown(input);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 7
describe("releaseAKey", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("releaseAKey should be a function", () => {
        expect(typeof pressAKey).toEqual("function");
    });

    test("should log a message when release a key", () => {
        const input = document.querySelector(".input input");
        expect(global.console.log).not.toHaveBeenCalled();
        releaseAKey();
        fireEvent.keyUp(input);

        expect(global.console.log).toHaveBeenCalledTimes(1);
    });
});

// Exercise 8
describe("inputToUpperCase", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("inputToUpperCase should be a function", () => {
        expect(typeof inputToUpperCase).toEqual("function");
    });

    test("should convert input value to uppercase", () => {
        const input = document.querySelector(".input input");
        input.value = "random text";
        inputToUpperCase();
        fireEvent.keyUp(input);

        expect(input.value).toEqual(input.value.toUpperCase());
    });
});

// Exercise 9
describe("handleSelectChange", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("handleSelectChange should be a function", () => {
        expect(typeof handleSelectChange).toEqual("function");
    });

    test("should have default value item_1", () => {
        const select = document.querySelector("#items");

        expect(select.value).toEqual("item_1");
    });

    test("should log select value when you change an option", () => {
        const select = document.querySelector("#items");
        handleSelectChange();
        select.value = "item_2";
        fireEvent.change(select);

        expect(global.console.log).toHaveBeenCalledWith("item_2");
    });
});

// Exercise 10
describe("submitFormHandler", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("submitFormHandler should be a function", () => {
        expect(typeof submitFormHandler).toEqual("function");
    });

    test("should log an object with input name as a key and input value as a value", () => {
        const form = document.querySelector("form");
        const formInputs = form.querySelectorAll("input");
        formInputs[0].value = "John";
        formInputs[1].value = "Smith";
        const result = {
            firstName: "John",
            lastName: "Smith"
        };

        submitFormHandler();
        form.submit();

        expect(global.console.log).toHaveBeenCalledWith(result);
    });
});

// Exercise 11
describe("handleScroll", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    test("handleScroll should be a function", () => {
        expect(typeof handleScroll).toEqual("function");
    });

    test("should log window vertical scroll position", () => {
        handleScroll();
        fireEvent.scroll(window);

        expect(global.console.log).toHaveBeenCalled();
    });
});