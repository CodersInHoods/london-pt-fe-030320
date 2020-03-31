# Updating DOM Elements

Now you've found the elements you need, you will want to actually do something with them.

The possibilities are endless for what you can do to HTML elements, but we'll cover the most common things.

## innerText

The text that is displayed to your user is in between the opening and closing tags. This is the `innerText`, we can set the `innerText` to a new string value to update it in the page.

```html
<div class="tweet">
  <div class="user">Trump</div>
  <div>I am the BEST president ever!</div>
</div>
```

```javascript
const userEl = document.querySelector(".user");

userEl.innerText = "Obama";
```

After running that code, our user element looks like this: `<div class="user">Obama</div>`. The text being displayed to our user is now displaying the new value.

## img src

If we've selected an image tag and we want to change the image being displayed, we can just set the `src` attribute:

```html
<img src="dank_meme.jpg" />
```

```javascript
const imgEl = document.querySelector("img");

imgEl.src = "dankest_meme.gif";
```

## style

We can even set the inline styles of an element from inside our JS code.

```html
<div class="message">
  Everything is fine!
</div>
<div style="display: none;" class="error message">
  Ooops, something went wrong!
</div>
```

In the above HTML, the second div has some inline style which means it won't be displayed to our user. If there's some error we want to display to our users, we can update the styles of these elements.

```javascript
const messageEl = document.querySelector(".message");
const errorMessageEl = document.querySelector(".message.error");

messageEl.style.display = "none";
errorMessageEl.style.display = "block";
```

Now the error message with be displaying and the standard message will be hidden.

## disabled

```html
<button>Don't click this!!!</button>
```

If you don't want your uses to have the ability to click on a button, you can set the `disabled` attribute to `true`:

```javascript
const button = document.querySelector("button");
button.disabled = true;
```
