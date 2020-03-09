# Function parameters

Imagine you’ve written some code to reduce a counter by 1 and set some text to red.

```javascript
counter = counter - 1;
textColor = "red";
```

Now we’ve found out about functions, we decide to put this inside a function called `countDown`:

```javascript
function countDown() {
  counter = counter - 1;
  textColor = "red";
}
```

That code is fine, we know it will work, we can call it using `countDown()`. We want this to run when a user clicks a "MINUS" button, and that would achieve what we want. But we then decide to add a "PLUS" button. This should _increase_ our `counter` and set the `textColor` to green. What would our code look like now?

```javascript
function countUp() {
  counter = counter + 1;
  textColor = "green";
}
```

This "PLUS" code looks very similar to the "MINUS" code. We want to be lazy and avoid repetition. Luckily for us, we can rewrite our 2 functions to be 1 function which accepts **parameters**.

```javascript
function count(increment, color) {
  counter = counter + increment;
  textColor = color;
}
```

Now we have 1 function which looks slightly different. Our parentheses now have `increment, color` in between them. These are our **parameters**. They are a little bit like variables because they are _a name given to a value_.

We can now call our function and **pass values** to use as those parameters:

```javascript
count(-1, "red");
count(1, "green");
```

Now we’re using 1 function to do 2 slightly different things. We can in fact pass _anything_ as these parameters. If the user presses the "BIG PLUS" button, we could call the function and pass in a bigger number and a brighter green:

```javascript
count(10, "bright green");
```
