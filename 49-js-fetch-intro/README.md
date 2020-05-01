# Communicating with servers

One of the most common uses for promises is when communicating with a server. This is because it takes a relatively long time to receive the data.

## The request-response cycle

Each time you navigate to a page or do something on a page which retrieves new data, you a making a _request_ to a server. The server sends the data back to your browser in a _response_.

This cycle involves so many steps, including travelling through physical cables under the sea ([here](https://www.submarinecablemap.com/)'s a map of them, and [here](https://gfycat.com/marriedlegalibis)'s what really happened when Github went down last week). It's no wonder that sometimes we're waiting for 5 entire seconds for a page to load.

This is why we use async code to handle requests and responses.

## `fetch`

In Javascript, the simplest way to make a request is to use `fetch`.

```javascript
fetch("https://youtu.be/dQw4w9WgXcQ");
```

That code makes a request to a URL, and the browser receives the response from the server. You will want to do something with that response, luckily `fetch` returns a promise.

```javascript
fetch("https://bit.ly/2yZJqeH").then((response) => {
  console.log("we got a response!");
});
```

## The response

When the server receives your request, it sends a response. The response contains information about what happened when the request was processed and probably some data for you to handle in some way.

One important property on the response object is the status. This is a 3 digit code which describes what happened when the request was processed. Was it rejected? Was everything ok? Was there an error?

Status codes which start with 2 mean everthing was OK, which is another property available on a response:

```javascript
fetch("https://codersinhoods.dev").then((response) => {
  if (response.ok) {
    console.log("hooray!");
  } else {
    console.error("oh dear");
  }
});
```
