# React - JS in JSX

When we need to execute some JS in JSX, the JS gets wrapped in curly brackets `{}`.

This could just be referring to a variable, or it could be the result of a function.

```javascript
const greeting = "Good morning";
const user = {
  firstName: "David",
  lastName: "Bowie",
};

<div>
  {greeting}, {user.firstName} {user.lastName}
</div>;
```

Let's refactor this to use a function call:

```javascript
const greeting = "Good morning";
const user = {
  firstName: "David",
  lastName: "Bowie",
};

const createGreeting = (greeting, user) =>
  `${greeting}, ${user.firstName} ${user.lastName}`;

<div>{createGreeting(greeting, user)}</div>;
```

This will render the same result, but the JSX is now a bit more readable.

## Lists

The whole point of combining HTML and JS into JSX is to allow us to execute code dynamically. A list of items is a perfect use case for this.

We need to display a list of items. Instead of writing every single `li` in HTML, we can iterate over an array of items and create elements using JSX.

```javascript
const brands = ["Apple", "Adidas", "Jaguar", "LEGO"];

<ul>
  {brands.map((brandName) => (
    <li>{brandName}</li>
  ))}
</ul>;
```

## `key`s

If you tested this out and viewed it in your browser, it would look correct. All the brands would display in a list. However, if you looked in the console, you'd see an error.

React needs some way to differentiate between all the components it needs to render. In a later exercise, we'll demonstrate a bug which can occur if we don't fix this.

For now, you'll quickly learn a new skill: ignoring the error about keys. Of course it's never good to have errors in your console, but it's very easy to ignore this one because it works anyway!

To fix it, we need to give each component in a list a unique `key` property. This is your first exposure to **props**. You'll learn much more about this later. For now, think of it like an HTML attribute:

```javascript
<ul>
  {brands.map((brandName) => (
    <li key={brandName}>{brandName}</li>
  ))}
</ul>
```
