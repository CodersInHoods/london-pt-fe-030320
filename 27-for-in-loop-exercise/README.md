# `for...in` loop

Objects are different to arrays because they are not ordered. Therefore it is not possible to iterate over an object in the same way. Fortunately, Javascript provides the `for...in` loop for us to iterate over the _keys_ in an object.

For all of the keys in an object, do something with each key. Most of the time, we'd use this key to access the _value_ stored at that key.

```javascript
for (const key in object) {
  object[key]; // this allows us to access the value at each key
}
```

If we have some data about users that we want to make anonymous, we could use a `for...in` loop inside a `for...of` loop to create new objects and a new array.

```javascript
const users = [
  {
    id: 1,
    first_name: "Yuri",
    last_name: "Vaudre",
    ip_address: "131.1.166.172",
    job_title: "Senior Editor",
    language: "Tswana",
    fav_movie_genre: "Drama"
  },
  {
    id: 2,
    first_name: "Neel",
    last_name: "Durrett",
    ip_address: "194.54.176.182",
    job_title: "Teacher",
    language: "Aymara",
    fav_movie_genre: "Crime|Drama"
  },
  {
    id: 3,
    first_name: "Patton",
    last_name: "Myall",
    ip_address: "61.214.242.223",
    job_title: "Operator",
    language: "Haitian Creole",
    fav_movie_genre: "Comedy"
  }
];

const anonData = [];

for (const user of users) {
  const anonUser = {};
  for (const userKey in user) {
    if (userKey !== "first_name" && userKey !== "last_name") {
      anonUser[userKey] = user[userKey];
    }
  }
  anonData.push(anonUser);
}
```
