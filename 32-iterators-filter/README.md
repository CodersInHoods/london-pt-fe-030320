# Array iteration - filter

Another common thing you will do with an array is to reject, or `filter` out, certain elements of an array.

If you have an array of users which have an `email` and a `recieveNewsletter` property. You shouldn't be sending emails to the users who don't want to recieve a newsletter. To achieve this you could use an if statement:

```javascript
users.forEach(user => {
  if (user.recieveNewsletter === true) {
    sendNewsletter(user.email);
  }
});
```

Instead, we'll use `filter`. The callback we pass to `filter` must return a `boolean`: `true` or `false`. When the function returns `true`, that element will appear in the newly created array. If the function returns `false`, that element will be filtered out.

```javascript
const newsletterUsers = users.filter(user => user.recieveNewsletter === true);
newsletterUsers.forEach(user => sendNewsletter(user.email));
```

## Dot chaining

Now we can use `forEach`, `map` and `filter`, we can _chain_ them together. `map` and `filter` both return a new array which we can iterate over:

```javascript
users
  .filter(user => user.recieveNewsletter === true)
  .filter(user => user.email !== undefined)
  .map(user => user.email)
  .forEach(sendNewsletter);
```

Let's walk through what this is doing on each line

- Make an array of only the users who wish to recieve a newsletter
- From _that_ array, make an array of only the users with an email
- From _that_ array, create an array of only the emails of users
- For each element in _that_ array, call the function `sendNewsletter`
