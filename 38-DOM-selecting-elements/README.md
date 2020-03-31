# Selecting elements in the DOM

Now we're working in a browser, we're going to be working with the DOM: the Document Object Model.

The DOM is an object which holds all of the created elements which make up the page.

We can access the DOM by using the `document` global variable, created by the browser.

## ID

The most targeted (or specific) way to find an element in the page is to use it's ID.

If there's an element in the page which looks like this:

```html
<div id="likes">
  Likes: 10
</div>
```

We can use `document.getElementById` to find it.

```javascript
const likesDiv = document.getElementById("likes");

// likesDiv === an HTMLDivElement
```

IDs are useful because they are only used _once_ on a page to uniquely identify elements, so `getElementById` returns only one element.

## class

If you want to find all the elements which use a particular class, you can use `document.getElementsByClassName`. Notice the `s`! This is used to get _multiple_ elements.

Given this HTML:

```html
<ul>
  <li class="item positive"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <button class="item">Add +</button>
  <button class="item">Add -</button>
</ul>
```

If we want to get all of the elements with the class `item`:

```javascript
const items = document.getElementsByClassName("item");

items.length === 7;
```

This gives us all 7 elements with this class, regardless of the tag. In this case we get 5 `lis` and 2 `buttons`.

If we want only the `positive` items:

```javascript
const items = document.getElementsByClassName("positive");

items.length === 3;
```

## tag

The _least_ specific way to find a elements is to use the tag name: `div` or `span` or `h4` or any other HTML tag.

```HTML
<ul>
  <li class="item positive"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <button class="item">Add +</button>
  <button class="item">Add -</button>
</ul>
```

```javascript
const listItems = document.getElementsByTagName("li");

listItems.length === 5;

const buttons = document.getElementsByTagName("button");

buttons.length === 2;
```

## An array? I wish

You've seen we're accessing the `length` of `listItems` and `buttons`. So these functions must return an array, right?

Unfortunately not. They actually return an `HTMLCollection`, an object which is quite similar to an array (ordered list, access values using indexes), but without all the functionality of an array (no `forEach`, `map` etc).

If you want to iterate over all the elements, you'll need to use a loop:

```javascript
for (const listItem of listItems) {
  console.log("this is an li", listItem);
}
```

## querySelector

The `getElement` functions are useful and specific, it's important to know about them, but there's another set of functions we can use for finding elements by tag, class, id or more complex queries: `querySelector` and `querySelectorAll`.

These functions work using CSS-style selector strings. `document.querySelectorAll("li.positive")` gives us all of the list items with the class `positive`. This was not possible with `getElementsByTagName` or `getElementsByClassName`.

`querySelector` gives us the _first_ element which matches the query, and `querySelectorAll` gives us _all_ elements which match the query.

Some examples of things we can use to select elements, this is not exhaustive. Any valid CSS selectors will work!

- tags: "div"
- classes: "positive"
- IDs: "login-form"
- relationships: ">" or "+"
- pseudo-classes: ":last-child" or ":disabled"

Let's use this HTML as an example:

```HTML
<ul>
  <li class="item positive"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <li class="item positive"></li>
  <li class="item negative"></li>
  <button class="item">Add +</button>
  <button class="item">Add -</button>
</ul>
<button>X - Leave the page</button>
```

```javascript
const firstListItem = document.querySelector("li");

const firstNegativeListItem = document.querySelector("li.negative");

const lastListItem = document.querySelector("li:last-of-type");

const allButtons = document.querySelectorAll("button");

const allButtonsInList = document.querySelectorAll("ul > button");
```

## Another not-array HTMLCollection?

Previously we saw that `getElements` returns an `HTMLCollection` instead of an array, which meant we couldn't use `forEach` or `map` or any other useful array method. What about `querySelectorAll`? It's a (slightly) newer function, so maybe it returns an array?

The good news: it doesn't return an `HTMLCollection`, the bad news: it doesn't return an array. It returns a `NodeList`. It's somewhere in between the 2. This time, at least we get `forEach`:

```javascript
const listItems = document.querySelectorAll("li");

listItems.forEach(listItem => listItem.remove());
```
