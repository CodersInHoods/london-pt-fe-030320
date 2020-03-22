# Arrays

Arrays are **collections** of multiple pieces of data.

A variable can store one piece of data, but we can also store an array in a variable, which allows us to store lots of different values in something which resembles a _list_.

Arrays use _indexes_ (which are numbers) to store and access the values which are being stored.

## Creating an array

To create an array, we use `[]` square brackets. In between the brackets, we list all the values that we want to store.

```javascript
const cities = ["London", "Manchester", "Liverpool"];
```

In this array, we're storing three `strings`. To access the values inside this array, again we use `[]`, and use the _index_ of the element we want to access.

```javascript
const city = cities[0];
city === "London";
```

## Some useful functions

Sometimes we want to check if an array contains a particular value. For this we use `includes`.

```javascript
cities.includes("Liverpool"); // true
cities.includes("Leeds"); // false
```

If we want to know the index of an element inside and array, we use `indexOf`.

```javascript
cities.indexOf("Manchester"); // 1
cities.indexOf("Glasgow"); // -1 is returned when an element is not in the array
```
