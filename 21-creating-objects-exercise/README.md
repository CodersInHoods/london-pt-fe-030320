# Creating Objects

Objects are collections of key-value pairs.

A key is used to access a value. In an array, the key is the index of the element, but in an object the key is a string that you define.

## Creating a new object

Objects are created using `{}` curly brackets. Inside the brackets are the key-value pairs, where the key is usually a word and the value can be any valid Javascript value.

```javascript
const country = {
  name: "Italy",
  population: 60.5
};
```

Here we have created an object with 2 keys: `name` and `population`. The respective values are `"Italy"` and `60.5`. The value stored at `name` has a type of `string`. We can store any type of value in our objects.

```javascript
const country = {
  name: "Italy",
  capitalCity: {
    name: "Rome",
    population: 2.8
  },
  population: 60.5
};
```

In this object, there's now a key of `capitalCity` which has a value of the type `object`. This is called _nesting_.
