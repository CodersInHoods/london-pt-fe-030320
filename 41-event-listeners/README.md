# Event listeners

Events are triggered when a user interacts with the page. There is a huge range of events we can listen for, we'll look at some of the most common here.

## `addEventListener`

We know how to find and create elements and we can store them in variables. These elements have a function called `addEventListener`. This takes 2 arguments.

1. The type of event we want to listen out for. This is a string
   - e.g. "click" or "submit"
2. The function we want to run when the event is triggered

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("The button has been clicked!");
});
```

We've found a button in the page, then we've started listening for a click on the button. When the user clicks on the button, the message will be logged out.

## Forms

When a user fills out a form in our page, they select the input fields, enters some values, then submit the form (using Enter or clicking the Submit button). These will all trigger events.

```javascript
// find the form element
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", () => {
  // log the user in
});
```

We have a form to log our user in. When the user submits the form, the function will run.

Now we can listen for when the user selects one of the input fields. For this we can listen for an event called "focus". Perhaps we want to add a `selected` class to the field.

```javascript
const usernameField = document.querySelector('input[name="username"]');

usernameField.addEventListener("focus", () => {
  usernameField.classList.add("selected");
});
```

Now, the user can type in their username. We can listen for this using the "input" event. The `value` property of an input element gives us whatever the user has entered or selected.

```javascript
usernameField.addEventListener("input", () => {
  console.log(`The username entered so far is ${usernameField.value}`);
});
```

## Event properties

So far the functions we've been passing as the second argument haven't been specifying any arguments. In fact, they are _always_ passed an `event` object which contains loads of information about the interaction which triggered the event.

### `preventDefault`

Many elements have some default behaviour which we might want to prevent for a variety of reasons.

Submitting a form is one of these examples. By default, submitting a form causes the page to reload, which is something we don't need to do because we're using Javascript to make our pages dynamic.

Luckily, events have a function called `preventDefault` which stops the default behaviour from occurring.

```javascript
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
```

### `target`

Another commonly accessed property is the `target`.

The target of the event is the element which triggered the event. That's not necessarily the event you added the listener to. This is because **events bubble up**.

This describes how an event travels up the DOM tree. Look at this snippet of HTML.

```javascript
<main>
  <div>
    <form>
      <input type="date" />
      <input type="submit" />
    </form>
    <form>
      <label>
        <input type="text" />
        <input type="number" />
        <input type="email" />
        <input type="submit" />
      </label>
    </form>
  </div>
</main>
```

There are 2 forms here, we could add separate event listeners to each form, but we can use the bubbling up in our favour and add the event listener to an ancestral element.

When the user submits a form, the event is triggered on that form element, then on it's parent (in this case the `div`), then _it's_ parent (`main`) and so on until it reaches the `document`.

```javascript
const div = document.querySelector("div");

div.addEventListener("submit", (event) => {
  console.log("A form was submitted!");
  console.log("Which form?");
  console.log("This form!", event.target);
});
```

We can use `event.target` to determine the form which has been submitted.

### Explore more events

Keyboard, mouse, touchscreens, device rotation, light sensors. There are so many different events, but they all use the same basic structure: `addEventListener("type", function)`.
