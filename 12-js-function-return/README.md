# Function `return` keyword

The last key feature of functions is that we can call a function and it can give us something back. To do this, we use the `return` keyword.

```javascript
function double(number) {
  return number * 2;
}
```

This function is called "double". It takes a parameter which we've called "number". When we call the function, it multiplies the "number" by 2 and returns that new number. We could store that number in a variable.

```javascript
const five = double(2.5);
const ten = double(five);
```

We're creating a variable called `five`, the value of this variable is the returned value from `double(2.5)`. Then we're creating another variable, `ten`, but this time we're passing in `five` to our function.

## Early returns

An interesting feature of the `return` keyword is that it's **the last thing to happen** inside a function, the rest of the code doesn't run. This function will always return `"Hello"` because the lines _after_ the first return don't run:

```javascript
function greeting() {
  message = "Hello";
  return message;
  message = "Goodbye";
  return message;
}
```

This can be useful to make code a little neater. From this:

```javascript
function withdrawMoney(accountBalance, amount) {
  if (accountBalance >= amount) {
    accountBalance - amount;
    return accountBalance;
  } else {
    return "Not enough funds!";
  }
}
```

To this:

```javascript
function withdrawMoney(accountBalance, amount) {
  if (accountBalance < amount) {
    return "Not enough funds!";
  }
  accountBalance - amount;
  return accountBalance;
}
```
