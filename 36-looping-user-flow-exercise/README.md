# User Experience

Just because we're building a CLI, it doesn't mean we should neglect our users. You should be making user-centred decisions at every step when building software.

If your user inputs a value that your app doesn't support, you might need to loop around to display the menu again. If you've structured your code with small, reusable functions, you can just call the menu function again.

```javascript
function mainMenu() {
  const input = readlinesync.question("Type the letter A!");
  if (input === "A") {
    console.log("Well done!");
  } else {
    console.log("Oops, that wasn't the letter A!");
    mainMenu();
  }
}
```

## Selecting from a list

You should provide the simplest way for your users to select an option from a list. Often this is best to use the index of the item.

`forEach` is the function we call to do something for each element in an array. The callback function we pass to `forEach` recieves each element in the array, but it also recieves the _index_ of each element in the array.

```javascript
const friends = ["Rachel", "Ross", "Chandler", "Monica", "Joey", "Phoebe"];

function chooseAFriend() {
  console.log("Here are the friends");
  friends.forEach((friend, index) => {
    console.log(`${index + 1}: ${friend}`);
  });

  const choice = readlinesync.question("Make your choice");
  const choiceAsNumber = parseInt(choice);
  const chosenFriend = friends[choiceAsNumber - 1];

  if (chosenFriend !== undefined) {
    console.log(`You chose ${chosenFriend}!`);
  } else {
    console.log("That is not a valid choice");
    chooseAFriend();
  }
}
```

Let's break this code down. First there's a user-friendly message: `"Here are the friends"`.

Next we call `forEach` on the `friends` array. The callback function we pass to `forEach` recieves each `friend` in the array and the `index` of each friend, starting at `0`. The `index + 1` and the `friend` get logged out.

The user then makes their choice, which gets parsed from a string into an integer, so we can use it as an index.

We use that integer to access a value in the array, but because we've displayed the `index + 1`, we need to subtract 1.

Next, we handle the possibility that something hasn't worked. So we check if the `chosenFriend` actually exists. If it does, it gets logged out, otherwise `chooseAFriend` is called again.
