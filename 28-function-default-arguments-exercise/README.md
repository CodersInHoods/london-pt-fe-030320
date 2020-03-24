# Default argument values

Sometimes we want a function to have some default behaviour. For this we can set the default values of the arguments. Most often this is used for arguments _after_ the first one, but it certainly can be used for any arguments.

```javascript
function greetMe(greeting = "Hello", me = "World") {
  console.log(`${greeting}, ${me}!`);
}

greetMe(); // logs "Hello, World!"
greetMe("HIII"); // logs "HIII, World!"
greetMe("Howdy", "Partner"); // logs "Howdy, Partner!"
greetMe(undefined, "Friend"); // logs "Hello, Friend!"
```

Notice that we can specifically pass `undefined` as the first argument. This is the equivalent to _not_ passing an argument, just like the first time we call `greetMe` with 0 arguments and the second time we call it with only the first argument.

Default argument values can also be useful to prevent errors.

```javascript
function placeOrder(product, quantity) {
  const total = product.price * quantity;
  return total;
}
```

If we called the above function without a quantity: `placeOrder({ name:"Rice 10kg", price: 9.99 })`, the function would return `NaN` or `Not a Number`. It tried to multiply `9.99` by `undefined`. If we always assume that a call to `placeOrder` is ordering at least 1 of that product, we can make sure the quantity is always 1.

```javascript
function placeOrder(product, quantity = 1) {
  const total = product.price * quantity;
  return total;
}
```
