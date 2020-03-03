# Variables in JS exercise

In Javascript, there are three ways to _declare_ a variable: `const`, `let` and `var`. The vast majority of the time you’ll be using `const` and `let`, so we’ll focus on those for now. These are two slightly different types of variable which allow us to use them in slightly different ways.

## `const`

`const` is short for _constant_. This is because a variable declared using `const` _cannot be reassigned_.

```javascript
const country = "UK";
const city = "London";
```

In this code, we have declared two constant variables. The _values_ of these variables are both strings. A string is a _type_, we’ll explore types very soon.

Imagine we want to search for some flights, now we can search using the values stored in `country` and `city`. This might involve a _function_ called `searchForFlightsTo`, we’ll explore functions later on.

```javascript
searchForFlightsTo(country, city);
```

Because we used `const`, we _cannot reassign_ these variables to another value. This code will produce an error:

```javascript
const country = "UK";
const city = "London";

searchForFlightsTo(country, city);

country = "France";
city = "Paris";

searchForFlightsTo(country, city);
```

In general, this is often the behaviour we want. It makes life easier for us as developers to know that once we create this variable, _we can be confident that it’s value hasn’t changed to something else_.

## `let`

Declaring variables using `let` is done in exactly the same way as `const`. Here, we'll create a couple of variables, both being assigned to `numbers`:

```javascript
let counter = 0;
let increment = 5;
```

The difference here is that _we can reassign the values_:

```javascript
let counter = 0;
let increment = 5;

counter = counter + increment;
```

The value stored in `counter` was initialised as `0`, but then we reassigned the value to `5` (or the current value of `counter` plus the current value of `increment`).

What would the value of `counter` be after this code?

```javascript
let counter = 0;
let increment = 5;

counter = counter + increment;
counter = counter + increment;
counter = counter + increment;
```

### Exercise

In your terminal, run `npm test`. You should see a list of tests which need to pass. Only once all of these tests pass should you move on to the next exercise.

Note: you will need to run `npm install` if you haven't already.
