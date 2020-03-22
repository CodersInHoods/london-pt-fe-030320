# Adding to arrays

We have a variable called `cities` which is storing an array. Inside that array there are three cities: London, Manchester and Liverpool. Now we want to add more cities to the array, maybe our users can type in the name of a city and it gets added to our list.

## Adding to the end of an array

`push` is the function we call on an array to add an element to the end.

```javascript
cities.push("Glasgow");
```

Now our array looks like this: `["London", "Manchester", "Liverpool", "Glasgow"]`.

## Adding to the start of an array

If we are ordering this list by our preferences, we now decide we want Bristol at the start of the array. For this we use `unshift`.

```javascript
cities.unshift("Bristol");
```

Now our array looks like this: `["Bristol", "London", "Manchester", "Liverpool", "Glasgow"]`.

## Adding _or replacing_ elements in any position

The `splice` function updates the array by adding elements to any position we specify. We can also use it to replace existing elements.

`splice` takes 3 (or more) parameters:

1. The index to start adding or replacing elements
2. The number of elements we want to _delete_ (use this for replacing elements)
3. (and beyond) The elements we wish to add to the array.

```javascript
// cities === ["Bristol", "London", "Manchester", "Liverpool", "Glasgow"]
cities.splice(2, 0, "Coventry");
// cities === ["Bristol", "London", "Coventry", "Manchester", "Liverpool", "Glasgow"]
```

We've added an element (`"Coventry"`) at index 2 and deleted 0 existing elements.

If now we want to _replace_ Coventry with Birmingham, we pass 1 as the second parameter to specify that we want to delete the existing element.

```javascript
// cities === ["Bristol", "London", "Coventry", "Manchester", "Liverpool", "Glasgow"]
cities.splice(2, 1, "Birmingham");
// cities === ["Bristol", "London", "Birmingham", "Manchester", "Liverpool", "Glasgow"]
```

## Combining arrays

Sometimes we want to combine multiple arrays into one array. For this there's `concat`.

The difference between `concat` and the above functions is that `concat` _does not change the original array_. It returns a new array.

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
// globalCities.length === 11
```
