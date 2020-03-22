# Loops

With loops, we can run some code repeatedly. This is referred to as _iteration_. There are various types of loop and other ways to iterate, but they are achieving the same goal: to do something repeatedly.

The first loop statement we will look at is the `for` loop.

## `for`

A `for` loop will keep executing your code until a condition becomes `false`.

The vast majority of the time, a `for` loop is used to _do something a fixed number of times_. To add to this: the vast majority of the time, that "fixed number" is the _length of an array_.

A `for` loop has 4 parts:

1. Initialise a counter
2. Condition
3. Increment the counter
4. The code to run

Here's the syntax and structure of those 4 parts:

```javascript
for ([initialise counter]; [condition which eventually becomes false]; [increment counter]) {
    // the code you wish to run repeatedly
}
```

To run some code 10 times, we'd write this loop:

```javascript
for (let counter = 0; counter < 10; counter++) {
  console.log("Run the code!");
}
```

Here's a description of the 4 parts:

1. Create a variable called `counter` which starts as the number `0`
2. Check if `counter` is less than `10`
3. Increase `counter` by `1`
4. Log out a message

Inside the block of code being executed, we have access to the variable `counter`, so we could log out that value, to see the counter increasing each time the code is run.

Read this next snippet. What is each part doing? How many times will this loop run?

```javascript
for (let counter = 100; counter > 1; counter /= 2) {
  console.log(counter);
}
```

Although you'll most often be starting at 0 and incrementing by 1, it's sometimes useful to run loops which do other things.

## Iterating over an array

Like we said at the top, the majority of the time you'll be using a `for` loop is to iterate over an array.

```javascript
const heights = [2.1, 1.46, 1.55, 1.29, 2.09, 1.74];

for (let i = 0; i < heights.length; i++) {
  const height = heights[i];
  if (height < 1.5) {
    console.log("Sorry, you cannot use this ride!");
  } else {
    console.log("Enjoy the ride!");
  }
}
```

This loop creates a variable called `i` which starts at 0 and increments by 1 each time until `i` has reached the length of the array.

Inside the block of code which executes, a variable called `height` is created which is set to the element in the heights array at index `i`. This is why we called the variable `i`, it is a common shorthand for `index`.
