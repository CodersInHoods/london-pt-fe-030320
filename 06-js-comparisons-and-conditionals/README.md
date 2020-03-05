# Comparisons and Conditionals

Very often in our apps, we will want to compare values with each other.

For example, if a user’s height is less than 100, they cannot purchase a ticket to a rollercoaster. If the city is London, display a picture of Big Ben.

These are _conditional_ statements based on _comparisons_ of values. If a condition is met, then do something.

There are several ways we can compare values. All of which evaluate to a `boolean` (either `true` or `false`).

- Equality: is the value _equal to_ another value
- Inequality: is the value _not equal to_ another value
- Greater than: when using `numbers`, is the number _greater than_ another number
- Less than: when using `numbers`, is the number _less than_ another number

## Equality

When we’re assigning a value to a variable, we use `=`. This means to compare values, we must use something other than `=`, or else we’d be assigning a value, not comparing it.

To compare values, we use multiple equals signs: `==` or `===`. Let’s start with `===`

### `===`

This represents a _strict comparison_. Is the value on the left _identical_ to the value on the right?

The vast majority of the time, you should use `===` to compare your values.

```javascript
5 === 5; // true
5 === 10; // false
5 + 5 === 10; // true
5 === "5"; // false
"Hello" === "HELLO"; // false

const target = 15;
let counter = 13;

counter === target; // false
counter = counter + 1;
counter = counter + 1;
counter === target; // true
```

### `==`

This represents _coerced equality_ comparison. That essentially means Javascript will do it’s best to _make the values equal_.

If you compare a `string` and a `number`, it will attempt to convert the string to a number. This can occasionally be useful, but most people would agree that the string `"10"` is not the same as the number `10`. It’s a little like comparing the word ten to the number 10. They might have the same meaning to humans, but a computer sees them differently.

All of these comparisons evaluate to `true`.

```javascript
5 == "5";
undefined == null; // null is similar to (but not the same as) undefined, you’ll find out more about it later
1 == true;
0 == false;
```

Running the same comparisons using strict equality `===`, they all evaluate to `false`.

As stated above, the vast majority of the time, you should use `===`. As a beginner, it might be simpler to pretend `==` does not exist!

## Inequality

Sometimes we want to check if a value is not equal to another value, we use the "bang" operator: `!`. Anywhere you see the bang operator, you should think "not".

The below example evaluates to `true` because 5 _does not equal_ 10.

```javascript
5 !== 10;
```

An interesting use case for the bang operator is to flip a `boolean` value:

```javascript
!true; // false
!false; // true
```

## Greater than and less than

We'll often want to know if a number is less than or greater than another number.

We use the character `<` for less than and `>` for greater than. We can combine these with an equals sign for `<=` less than or equal to and `>=` greater than or equal to.

Is the user's balance _greater than or equal to_ the price of the items in their cart?

```javascript
const balance = 100;
const price = 14.99;
balance >= price; // true
```

Is the user's age _less than_ 18?

```javascript
let age = 10;
age < 18; // true
age = age + 8;
age < 18; // false
```

## Using comparisons in conditionals

We usually make these comparisons to determine _if_ we should do something. Here we use an `if` statement.

```javascript
let message;
if (balance < price) {
  message = "Not enough funds!";
}
```

In between the parentheses `()` is our comparison. If the comparison evaluates to `true`, the code in between the curlies `{}` is executed.

Sometimes we also want to do something if the comparison evaluates to `false`. Here we use `else`.

```javascript
let message;
if (balance < price) {
  message = "Not enough funds!";
} else {
  message = "Please continue with your purchase";
}
```
