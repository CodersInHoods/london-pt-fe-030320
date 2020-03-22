# While loops

If it's not possible to know the number of times a loop must be executed, it might be a good use case for a `while` loop.

`while` loops have a condition and some code to execute.

```javascript
while ([condition]) {
  // code to execute
}
```

We can create a loop which runs a predetermined number of times, just like a for loop:

```javascript
let i = 0;

while (i < array.length) {
  console.log(array[i]);
  i++;
}
```

In this situation, we need to define a counter, have a condition and increment the counter. This is exactly what a `for` loop was designed for, so a while loop is often used when there are some unknowns.

> While we don't have enough peeled potatoes, keep peeling potatoes.

When I'm performing this task, I don't count the potatoes beforehand (they are all different sizes!) and I might be an inefficient peeler and remove lots of the flesh as well as the skin. Therefore I'll keep assessing the amount of potatoes I have after each one is peeled.

```javascript
let potatoes = [];
const requiredPotatoes = 12;

function assessPotatoes() {
  let total = 0;
  for (let i = 0; i < potatoes.length; i++) {
    total += potatoes[i];
  }
  return total;
}

while (assessPotatoes() < requiredPotatoes) {
  const peeledPotato = Math.random();
  potatoes.push(peeledPotato);
}
```

Inside our `while` condition, we're calling a function named `assessPotatoes`, which counts up all our previously peeled potatoes, all of which are random numbers. While the total of our peeled potatoes is less than our required amount (maybe it's weight or volume), peel another potato and add it to our array.
