# REST APIs

APIs are how we as web developers access data stored in databases. APIs come in all shapes and sizes but there are a few widely-followed rulesets for building APIs which make things simpler for us. One of these is REST (REpresentational State Transfer).

## RESTful routes

RESTful conventions are designed to simplify things for back end and front end developers. One way it does this is by re-using URLs with different HTTP methods to achieve all the CRUD actions we'd expect from an API.

| HTTP Method | URL       | Action                             |
| ----------- | --------- | ---------------------------------- |
| GET         | /cars     | Get all the cars                   |
| POST        | /cars     | Create a new car                   |
| GET         | /cars/:id | Get one car                        |
| PATCH       | /cars/:id | Update details of one car          |
| PUT         | /cars/:id | Replace all the details of one car |
| DELETE      | /cars/:id | Delete one car                     |

## `fetch`

To make these different requests, we pass a configuration object to `fetch`.

### method

The first key we need in the config object is `method`. This specifies the HTTP method to be used: GET, PATCH, POST, PUT, DELETE or any other valid HTTP method.

```javascript
const configObject = {
  method: "POST",
};
```

### headers

Next is the `headers` object. All requests and responses include headers. These are key-value pairs which include all sorts of information about the data being sent. We'll be sending JSON data to the server, and we need to tell this to the server.

Two keys need to be included on the headers object: `Content-Type` and `Accept`. Both of these keys have the value `"application/json"`. This is a MIME type, a string which describes the type of data.

```javascript
const configObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
```

### body

Finally, we need to specify the `body` of the request. If we're POSTing, PATCHing or PUTting, we're sending some data to the server. This data is stored in the `body` of the request.

We can only send a string in the body, so we first need to convert our JS objects into JSON.

```javascript
const configObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(newCar),
};
```

## Making the request

After we've constructed the config object, we pass it to `fetch` after the URL we're requesting, and the response is the same as it is for a GET request.

```javascript
const configObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(newCar),
};

fetch("/cars", configObject)
  .then((response) => response.json())
  .then((car) => renderCar(car));
```
