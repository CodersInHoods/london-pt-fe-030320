# Removing from arrays

Let's continue working with the cities arrays:

```javascript
const britishCities = [
  "Bristol",
  "London",
  "Birmingham",
  "Manchester",
  "Liverpool",
  "Glasgow"
];
const usCities = [
  "Los Angeles",
  "New York City",
  "Chicago",
  "Boston",
  "Seattle"
];

const globalCities = usCities.concat(britishCities);
```

## Removing elements from the start of an array

`shift` removes _and returns_ the first element in an array.

```javascript
const firstCity = britishCities.shift();
// firstCity === "Bristol";
```

Because the array `globalCities` was created _before_ we removed the first element from `britishCities`, `"Bristol"` still exists in the `globalCities` array.

## Removing elements from the end of an array

`pop` removes and returns the last element of an array.

```javascript
const lastCity = usCities.pop();
// lastCity === "Seattle";
```

## Removing elements from the middle of the array

We learned about using `splice` for adding and replacing elements in an array. Now we can use the same function to remove elements. `splice` returns an array which contains any elements which were removed.

```javascript
const removedCities = globalCities.splice(3, 4);
// removedCities === ["Boston", "Seattle", "Bristol", "London"]
```
