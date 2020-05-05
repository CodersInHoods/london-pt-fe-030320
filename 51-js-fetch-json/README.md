# JSON

JSON (JavaScript Object Notation) is the data format of choice for much of the modern web. It's an incredibly common format for APIs, so common that our response objects have a dedicated `json()` function just like the `text()` function.

The `json` function first does the same thing that `text` does: it waits until the body has been received and extracts the body as a string. Then it parses the string _from_ JSON into JS objects for us to use.

```javascript
fetch("https://www.googleapis.com/books/v1/volumes?q=javascript")
  .then((response) => response.json())
  .then((bookData) => {
    bookData.items.forEach((book) => {
      console.log(book.volumeInfo.title);
    });
  });
```

In the above example, the Google Books API responds with JSON, so we parse it into objects. The object we recieve looks like this: `{ items: [ { volumeInfo: { title } } ] }`. It's an object with a key of `items` which is an array of objects, each of which have many keys on them, one is `volumeInfo`, which is another object with lots of keys, one of which is `title`.


