# Accessing Object Properties

The key-value pairs inside an object can be referred to as _properties_ of an object. Most of the time, you will access the property using _dot notation_: `country.name`, but we can also use `[]` square brackets.

## Dot notation

```javascript
const car = {
  make: "Ford",
  model: "Mustang"
};
```

To access the properties of the `car` object, we can simply use `car.make` or `car.model`. These will allow us to access the **values** stored at these **keys**. But often we'll have a more complicated data structure.

```javascript
const data = {
  results: {
    car: {
      make: "Ford",
      model: "Mustang"
    },
    boat: {
      make: "Boaty",
      model: "McBoatface"
    }
  }
};
```

Fortunately, we can chain our dots to access `data.results.car.make`. `data` is an object so we can access the values using dot notation, `data.results` is also an object, `data.results.car` is yet another object, and finally `data.results.car.make` is the string value we want.

## Square brackets

Using square brackets and a `string`, we can access the value stored with that key.

```javascript
const car = {
  make: "Ford",
  model: "Mustang"
};
car["make"];
car["model"];
```

This is much the same as dot notation, except arguably less readable. Sometimes our keys have characters which confuse the JS compiler (like spaces or hyphens), so we _need_ to use strings to **define** and **access** the keys.

```javascript
const car = {
  make: "Ford",
  model: "Mustang",
  "number of wheels": 4
};

car.make;
car.model;
car["number of wheels"];
```

If a user has a choice between viewing details of the car and details of the boat, we don't want to duplicate all of that code, so we can use `[]` square brackets to make our code more flexible.

```javascript
const vehicleType = askUserForVehicleType(); // this returns "car" or "boat"

const vehicle = data.results[vehicleType];

console.log(`a ${vehicleType}: ${vehicle.model} by ${vehicle.make}`);
```
