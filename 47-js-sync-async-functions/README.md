# Synchronous and Asynchronous

Not everything in programming can be done instantly. There could be a delay of several seconds before a server sends back the data you requested. If the code we write is _synchronous_, everything would be blocked until we recieved that data. This is why we write asynchronous code.

Asynchrony is referring to something happening out of order. Javascript code is executed line by line, but with async code we can tell the browser to do something at another time.

The simplest function which represents asynchronous code is `setTimeout`.

## `setTimeout`

`setTimeout` takes 2 arguments: a function and a delay in milliseconds. The function is executed after the delay has elapsed.

This code will immediately show a message and hide it 1 second later:

```javascript
displayMessage();
setTimeout(hideMessage, 1000);
```

You can also pass an inline function:

```javascript
setTimeout(() => {
    document.querySelector(".message").remove();
}, 1000);
```

`setInterval` works in the same way, but it keeps running the function every time the delay elapses.

Event handlers are also asynchronous: the user could click at any time and the function will run every time.
