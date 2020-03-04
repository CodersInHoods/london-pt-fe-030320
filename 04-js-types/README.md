# Types

When we refer to a _value_ in our code, the computer needs to know what _type_ of data it is.

In Javascript there are 4 primitive types and 2 complex types. For now, we'll only look at the primitive types.

## Primitive types

### `string`

A string is the type given to something we will _usually assume_ is some text. It is denoted using quotes, there are 3 different quotes we can use: single, double or backticks.

```javascript
const country = "UK";
const city = "London";
const area = `Moorgate`;
```

The type of all of these variables `string`. Single quotes and double quotes are mostly interchangeable, depending on your preference, but backticks have some special behaviour.

Inside backticks, we can actually _execute JS code_. Take a look at this example:

```javascript
const country = "UK";
const city = "London";

const location = `Country: ${country} and city: ${city}`;
```

The variable `location` will be set to `"Country: UK and city: London"`. This is called _interpolation_.

### `number`

Numbers in JS have their own type: `number`. Numbers don't have quotes around them, which is how our computer can tell between the actual number `5` and a string which is set to `"5"`.

```javascript
const quantity = 43;
const price = 10.99;
const total = quantity * price;
```

Here we have 3 variables, all with the type of `number`. A `number` can be an integer (a whole number) or a floating point number (a float, a number with decimal places). Other programming languages have separate types for integers and floats, but in JS we use `number` for both.

### `boolean`

A boolean value is something which can either be `true` or `false` and nothing else. Again, we don't use quotes like we do with strings. If you think it has a slightly odd name, it's named after George Boole, a mathematician who defined this concept in the 19th century.

```javascript
const yes = true;
const no = false;
```

### `undefined`

This is probably the most confusing of the primitive types. In JS, we use the keyword `undefined` to say that a variable does not yet have a value.

```javascript
const name = undefined;
let age = undefined;
```

This has its own type because it is _an empty value_. It has no value, so it cannot be a `string`, `number` or `boolean`.

If we declare a variable without assigning it a value, the value will in fact be set to `undefined`

```javascript
let age;
```

In this example, `age` will be `undefined`.

Notice we used `let` in this example, not `const`. When declaring a `const` variable, we must _always_ initialize it with a value.
