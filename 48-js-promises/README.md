# Promises

A promise represents an operation that hasn't finished yet, they are intended to simplify asynchronous code.

They are tricky to understand initially, but once you spend enough time working with them you'll realise how powerful they are.

## Terminology

One reason they're confusing is there's a lot of new terminology.

A promise can be a few different states:

- `pending`
- `fulfilled`
- `rejected`

When a promise is first created, it's `pending`. That's easy enough to understand.

The promise can be _resolved_ or _rejected_. If it's resolved, the status is `fullfilled`, and `rejected` if it's rejected.

## Creating a promise

Promise is a class, so we must use the `new` keyword to create a promise. We pass a function which takes 2 arguments, both of which are functions.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // do async thing in here
});
```

The two functions we've recieved in our callback are for resolving or rejecting the promise. We resolve the promise when the async action is completed successfully and we reject the promise if something has gone wrong.

Here we will resolve the promise when the counter is greater than 10.

```javascript
const myPromise = new Promise((resolve, reject) => {
  let counter = 0;

  const intervalID = setInterval(() => {
    counter++;
    if (counter > 10) {
      resolve();
      clearInterval(intervalID);
    }
  }, 1000);
});
```

## Using promises

We've learned how to create a promise, but now we need to use them to execute code after the promise is resolved. For this we use the function `then` which is built into each promise. We pass a function to `then` which will run when the promise is resolved.

```javascript
myPromise.then(() => {
  console.log("the async action has finished!");
});
```

In the example above, we might want to know the value of the counter when the promise is resolved. Luckily we can pass a value to the `resolve` function and that value will be passed in to the function we pass to `then`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  let counter = 0;

  const intervalID = setInterval(() => {
    counter++;
    if (counter > 10) {
      resolve(counter); // here we pass the counter value
      clearInterval(intervalID);
    }
  }, 1000);
});

myPromise.then((finalCounterValue) => {
  // here we recieve the value
  console.log(`the counter has counted to ${finalCounterValue}`);
});
```

## Chaining `then`s

Each time we call `then`, it returns a promise, on which we can call `then` and repeat as many times as we like. Let's do some refactoring of the code above.

```javascript
const countTo = (target) =>
  new Promise((resolve, reject) => {
    let counter = 0;

    const intervalID = setInterval(() => {
      counter++;
      if (counter === target) {
        resolve(counter); // here we pass the counter value
        clearInterval(intervalID);
      }
    }, 1000);
  });

countTo(10).then((finalCounterValue) => {
  console.log(`the counter has counted to ${finalCounterValue}`);
});
```

Now we have a function called `countTo` which returns a promise and resolves the promise after the counter has reached the `target`.

We're calling this function once, passing in 10, but we can call it again in the callback:

```javascript
countTo(10)
  .then((finalCounterValue) => {
    console.log(`the counter has counted to ${finalCounterValue}`);

    return countTo(20);
  })
  .then((finalCounterValue) => {
    console.log(`the counter has counted to ${finalCounterValue}`);

    return countTo(30);
  })
  .then((finalCounterValue) => {
    console.log(`the counter has counted to ${finalCounterValue}`);

    return countTo(40);
  })
  .then((finalCounterValue) => {
    console.log(`the counter has counted to ${finalCounterValue}`);
  });
```

In total, this will take 1 minute and 40 seconds. The first promise will resolve after 10 seconds, then we call `countTo` again, which resolves after 20, then we call it again, and so on.

The important thing to remember is to `return` the next promise if you want to pause the chain of `then`s until it is resolved.

## Rejecting

We mentioned rejected promises above, but we'll go into more detail in a later exercise, so focus on `resolving` your promises first.
