# User Input

To build an interactive Node app, we need to ask our users for some input and do something with that input.

There are a lot of different ways to capture user input, but we'll use the `readline-sync` library.

## Basic input

```javascript
const balance = readlineSync.question("What is your account balance? ");

balance === "48.99";
```

The library provides a function called `question`, which displays the question to the user and waits for input from the user. Whatever the user types in gets returned by the function.

In the above example, we asked the user for a balance, they typed in "48.99" and we recieved that as a string. But we probably want to use that value as a number. We can use the function `parseFloat` for this.

```javascript
parseFloat(balance); // from "48.99" to 48.99
```

For things like this, it's worth reading the documentation of the library. It's such a common task that there might be a function to help you.
