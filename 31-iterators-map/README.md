# Array iteration - map

Take this array of movies:

```javascript
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
```

To create an array of movie titles, we could use `for`, `for...of` or our newly discovered function `forEach`:

```javascript
const movieTitles = [];

movies.forEach(movie => {
  movieTitles.push(movie.title);
});
```

This is a very common pattern, so Javascript gives up the `map` function to _create a new array by iterating over an existing array_.

```javascript
const movieTitles = movies.map(movie => {
  return movie.title;
});
```

The function we are passing to `map` takes a movie as an argument and returns the title of that movie. Whatever is returned by our callback function is used to populate the new array. If you wanted to ignore the titles of the movies, but you still wanted an array of movie titles, you could do this:

```javascript
const movieTitles = movies.map(movie => {
  return "Batman";
});

movieTitles === ["Batman", "Batman", "Batman"];
```

You'll _usually_ be using `map` to create an array which is _based on_ the original array. Often it will be a single property of each element (like our `movieTitles` array), it might be an array of new values based on the original values:

```javascript
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2); // arrow function! implicit return value!

doubledNumbers === [2, 4, 6];
```
