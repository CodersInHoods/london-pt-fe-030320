# Array iteration - forEach

`for` loops are useful for iterating over an array and doing something for each element in that array. This is such a common use case that Javascript gives us a function specifically for this purpose: `forEach`.

`forEach` is a function built in to arrays, we call the function `forEach` and we pass a function to it. This is known as a _callback function_.

```javascript
function displayMovieInfo(movie) {
  console.log(`Title: ${movie.title}, by ${movie.director} (${movie.year})`);
}

const movies = [
  {
    title: "1917",
    year: 2019,
    director: "Sam Mendes"
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola"
  },
  {
    title: "Toy Story",
    year: 1995,
    director: "John Lasseter"
  }
];

movies.forEach(displayMovieInfo);
```

`movies` is an array with 3 elements. Calling `forEach` on the array and passing it a _reference_ to the function `displayMovieInfo` means `displayMovieInfo` is going to be called 3 times, once for each element in the array.

When we call functions, we can pass some data created on the spot, not stored in a variable: `multiply(3, 10)`. We can do just the same thing with functions:

```javascript
movies.forEach(function(movie) {
  console.log(`Title: ${movie.title}, by ${movie.director} (${movie.year})`);
});
```

We're creating an _anonymous_ function (it doesn't have a name) and we're passing that to `forEach`. The result is the same: 3 logs of movie information.

The same can be achieved with an arrow function:

```javascript
movies.forEach(movie =>
  console.log(`Title: ${movie.title}, by ${movie.director} (${movie.year})`)
);
```
