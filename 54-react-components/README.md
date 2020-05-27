# React

React is one of the most popular frameworks out there, and for good reason. It might take a bit of time to get used to it, but it will speed up the process of building front ends.

The main concept is: data and UI are bound together. Whenever the data updates, the UI will update, too.

This is just one part of it, and we'll explore this in much more detail in later exercises. Here we're looking at components.

## Components

Another way that React encourages you to be efficient with your code is by splitting up the UI into separate _components_.

Components can be compared to DOM elements. In fact, in React, DOM elements _are_ components.

Here's a button in HTML:

```html
<button id="submit">Yes please!</button>
```

Here's how you'd display the same button in React:

```jsx
<button id="submit">Yes please!</button>
```

It's the same!

React uses a special syntax which allows us to execute JS inside an HTML-like structure, called JSX. At first it seems confusing, but it's very similar to HTML, with some JS sprinkled in.

## Your own components

As well as standard DOM elements, components are actually functions which return some JSX.

```javascript
const YesButton = () => {
  return <button id="submit">Yes please!</button>;
};
```

This is just a normal JS function, which is returning the button we created above. By creating this function, we can use it inside JSX to render our button element.

```javascript
<main>
    <div>
        Would you like to purchase?
        <YesButton />
    </div>
    <div>
        Would you like to cancel?
        <YesButton />
    </div>
</main>
```

Generally, it's a good idea to create each component in its own file and export the component by default. Whenever you use JSX, `React` must be available, so you need to `import React from 'react'` in every file.

This would mean our `YesButton.js` file would look like this:

```javascript
import React from "react";

const YesButton = () => {
  return <button id="submit">Yes please!</button>;
};

export default YesButton;
```

## Testing your code

To run the tests, run `npm test` as usual. To view your app, run `npm start`.
