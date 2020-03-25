# Arrow functions

We've learned about how useful functions can be, and if you write any reasonably sized JS app, you'll see `function`, `function`, `return`, `function`, `return` everywhere! This is one reason why there's a more recent way to write a function which makes it more concise.

We know how to write a function like this:

```javascript
function initial(firstName, lastName) {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
}
```

This is known as a _function declaration_ or _function expression_.

In Javscript, functions are _first class objects_. This means they are their own data type and can be assigned to a variable like this:

```javascript
const initial = function(firstName, lastName) {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};
```

There are some relatively small differences between these 2 ways to define a function. In the second method, the function itself does not have a name, therefore it is an _anonymous_ function, sometimes known as an _inline_ function.

## Arrow functions

The syntax for an arrow function essentially swaps `function` for an arrow `=>`, and swaps the order a little bit:

```javascript
const initial = (firstName, lastName) => {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
};
```

Now, you might think this isn't any better, and is actually _more_ confusing than a function declaration, but we can simplify it further:

```javascript
const initial = (firstName, lastName) =>
  `${firstName[0].toUpperCase()}. ${lastName}`;
```

Without using curly brackets, we have an _implicit return value_, so we don't need to use the `return` keyword.

If we're only using one parameter in the function, we don't even need the parentheses `()`:

```javascript
const isAdult = user => user.age >= 18;
```

## Example

This is an example of a function called `getDirectories` which returns an array of all directories inside a specified directory. You don't need to understand it, we'll cover some of this in later exercises.

```javascript
const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
```

Written using function declarations would be:

```javascript
function getDirectories(source) {
  return readdirSync(source, { withFileTypes: true })
    .filter(function(dirent) {
      return dirent.isDirectory();
    })
    .map(function(dirent) {
      return dirent.name;
    });
}
```

There are over twice the lines of code and so many more unnecessary characters like `;`, `{}`, `()`, `function`. You might not like the look of arrow functions initially, but you'll come to realise how much neater they make your code.

Finally, if your function doesn't take _any_ parameters, the parentheses come back:

```javascript
const sayHi = () => consol.log("Hi!");
```
