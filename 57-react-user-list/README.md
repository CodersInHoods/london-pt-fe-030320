# Arrays and objects in state

We can store more complex data in state, like arrays and objects.

## Arrays

```javascript
const [cities, setCities] = useState([]);
```

Here we're storing an array in state. Initially, it's an empty array. Now we want to add a string to the end of the array.

`cities.push("London")` right? Directly changing the array value doesn't tell React that we need to rerender, so we need to call the `setCities` function with a new value.

We need a new array which contains all the values of the _current_ array, plus a new one at the end. This can be achieved using the spread operator: `[...cities, "London"]`.

```javascript
setCities([...cities, "London"]);
```

Now we want to remove London from the array. We can use `filter` to pass a filtered array to `setCities`.

```javascript
setCities(cities.filter((city) => city !== "London"));
```

We could expand this to allow multiple different cities to be added or removed.

```javascript
const FavouriteCities = () => {
  const [cities, setCities] = useState([]);

  const addCity = (city) => setCities([...cities, city]);
  const removeCity = (city) => setCities(cities.filter((c) => c !== city));

  return (
    <div className="cities">
      <ul>
        {cities.map((city) => (
          <li>{city}</li>
        ))}
      </ul>
      <div className="city">
        London
        <button onClick={() => addCity("London")}>Add</button>
        <button onClick={() => removeCity("London")}>Remove</button>
      </div>
      <div className="city">
        Paris
        <button onClick={() => addCity("Paris")}>Add</button>
        <button onClick={() => removeCity("Paris")}>Remove</button>
      </div>
      <div className="city">
        Baltimore
        <button onClick={() => addCity("Baltimore")}>Add</button>
        <button onClick={() => removeCity("Baltimore")}>Remove</button>
      </div>
    </div>
  );
};
```

## Objects

Now you might be building a page about a city, and you need to give the user the option to mark it as "visited". Let's say we're storing some data about the city in state:

```javascript
const [cityData, setCityData] = useState({
  name: "London",
  population: 10000000,
  visited: false,
});
```

Similar to arrays, we need to pass a new value, so we pass a new object which contains the existing key-values, plus the updated key value pair.

```javascript
const markAsVisited = () =>
  setCityData({
    ...cityData,
    visited: true,
  });
```
