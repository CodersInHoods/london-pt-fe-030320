# Creating new DOM elements

Creating elements consists of 3 steps:

1. Create the element
2. Update the element
3. Add the element to the DOM

We've already learned about how we can update elements, now let's look at the other 2 steps.

## `createElement`

To create a new element, we can call the function `document.createElement`. All HTML elements _must_ have a tag, which is why this function takes a tag name as the argument.

```javascript
const newDiv = document.createElement("div");

// newDiv === <div></div>

const newHeader = document.createElement("h1");

// newHeader === <h1></h1>

const newImage = document.createElement("img");

// newImage === <img />
```

`createElement` returns a new element, so we store that element in a variable. The elements returned are empty, they are just opening and closing tags. So now we need to update them so our users have something to look at.

```javascript
const newDiv = document.createElement("div");
newDiv.innerText = "This div was created by JS!";

// newDiv === <div></div>

const newHeader = document.createElement("h1");
newHeader.style.color = "red";
newHeader.innerText = "Welcome!";

// newHeader === <h1></h1>

const newImage = document.createElement("img");
newImage.src = "logo.png";

// newImage === <img />
```

Great, we've created elements, we've filled them with something, now we need to get them added to the DOM so our users can actually see them.

All HTML elements are inside another element (except the document itself), so to add these to the page, we need an element which is already in the DOM.

## `append`

Then we call the function `append` on that element, passing it the element(s) to be added to the page.

```javascript
// find the element with the id "container"
const container = document.querySelector("#container");

container.append(newHeader, newImage, newDiv);
```

The order in which we pass these elements is important, they will appear inside the element in this order.

## `append` isn't the only option

There are a variety of functions we can use to add an element to a parent. The majority of the time, `append` will be what you want to do, but it's worth knowing about some other options:

```javascript
// replaceChild swaps out a child element for a newElement
parentElement.replaceChild(newElement, childOfParentElement);

// insertBefore adds a new element before a specified child element
parentElement.insertBefore(newElement, childOfParentElement);

// appendChild is similar to append, but only accepts 1 argument
parentElement.appendChild(newElement);
```

## New elements appended to new elements

The elements we create need to get on the page eventually, but we can add created elements to another created element which gets added to the page.

Let's say we have a collection of lists and we want to display them all in their own `ol` elements.

```javascript
// define our lists
const lists = [
  ["Mikey", "Dave", "Rachel"],
  ["Cat", "Dog", "Hamster"],
  ["Banana", "Apple", "Pear"]
];

// find the container in the page
const listContainer = document.querySelector("#list-container");

// define a function to display a list
const displayList = list => {
  // create a new "ol" element
  const newOrderedListElement = document.createElement("ol");

  // forEach item in the list
  list.forEach(itemInList => {
    // create a "li" element
    const newListItemElement = document.createElement("li");

    // update the element to display the text
    newListItemElement.innerText = itemInList;

    // add it to the "ol" element
    newOrderedListElement.append(newListItemElement);
  });

  // add the "ol" element to the container
  listContainer.append(newOrderedListElement);
};

// forEach list, call the displayList function
lists.forEach(list => displayList(list));
```
