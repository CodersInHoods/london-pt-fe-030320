# Response body

When a server sends a response, it often includes a body. The body contains the data we requested from the server and can come in many different formats.

However all the different formats of the body are all originally strings. HTTP can only send text in the body, the text might represent HTML or JSON or anything else.

## Accessing the body text

The response object has a `body` property, which is a `ReadableStream`. This is a class which gives us access to the byte data sent in the body of the response. Occasionally this could be useful, but the majority of the time we want the body in some other format.

Fortunately, the response has a function called `text()`. This function allows us to retrieve the body of the response as a string. We can invoke the function inside a `then` callback and access the value in the next `then` callback:

```javascript
fetch("http://numbersapi.com/42")
  .then((response) => response.text())
  .then((numberFact) => console.log(numberFact));
```

You might be thinking "the function `text()` must return the string from the body". In fact, `text()` actually returns a promise, which gets resolved with the string from the body, that's why we generally call it inside a `then` callback.

The reason for this is because the HTTP actually sends headers separately to the body, and the promise returned from `fetch()` might be resolved because the headers have been received, but the body has not yet been received. We essentially say "give me the body of the response when you receive it".
