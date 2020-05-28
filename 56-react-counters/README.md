# State

In React, state is referring to a dynamic storage of data. It's the place where you store any variables which might change.

The benefit of using a framework like React is: once you've declared how the state should effect the UI, you only need to change the state and the UI will automatically change.

This is why we use React's state storage instead of `const` or `let` variables.

## `useState`

React has some tools available called "hooks". These are functions which allow you to "hook" into React's features from your own components.

The first one you'll learn is `useState`. This allows us to use React to store our data and will update the UI whenever our state changes.

```javascript
const [agreeToTerms, setAgreeToTerms] = useState(false);
```

We need to display options for our user to agree to the terms of using our website. We'll store this in state using `useState`.

The value we pass to `useState` is the initial value of our state. In this case, the checkbox will begin unchecked, therefore the boolean starts as `false`.

The unusual syntax isn't anything special to React. `useState` returns an array with 2 elements. We _destructure_ the array to give names to the first and second elements.

These elements can be thought of as a `getter` and a `setter`. The first stores the _current_ value of the state, the second is a function which allows us to _set_ the state to a new value.

## Displaying the value

We can access the state in JSX just like any other variable.

```javascript
<p>Do you agree to terms? {agreeToTerms}</p>
```

And we use the `setter` function to update the value:

```javascript
const acceptTerms = () => setAgreeToTerms(true);
const declineTerms = () => setAgreeToTerms(false);
```

There's one problem with this. React doesn't know how to render a boolean value, so `true` and `false` don't display. Luckily we can use a ternary statement.

```javascript
<p>Do you agree to terms? {agreeToTerms ? "Yes I agree" : "No thanks"}</p>
```

## Events

Now to make it interactive, we can use events. We can pass _props_ in a similar fashion to HTML attributes. We'll cover props in more detail later on.

```javascript
<div>
  <button onClick={acceptTerms}>I agree</button>
  <button onClick={declineTerms}>I do not sagree</button>
</div>
```

When the user clicks on one of these buttons, one of the corresponding functions will run, updating the state. This causes the UI to rerender, which displays the correct message.

## The complete component

```javascript
const Terms = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const acceptTerms = () => setAgreeToTerms(true);
  const declineTerms = () => setAgreeToTerms(false);

  return (
    <div>
      <p>Do you agree to terms? {agreeToTerms ? "Yes I agree" : "No thanks"}</p>
      <div>
        <button onClick={acceptTerms}>I agree</button>
        <button onClick={declineTerms}>I do not sagree</button>
      </div>
    </div>
  );
};
```
