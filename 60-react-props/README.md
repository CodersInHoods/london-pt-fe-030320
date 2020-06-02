# React Props

Props get passed to components. In this way, they're like a function's arguments. You can pass any values as props, they all get passed in an object.

In the JSX, they look a bit like HTML attributes:

```javascript
<FriendsList yourName="Jimmy" numberOfFriends={5} />
```

Inside the component, the function recieves an argument made up of all the passed props as key-value pairs on one object:

```javascript
const FriendsList = (props) => {
  return (
    <div>
      <p>Hi, {props.name}</p>
      <p>You have {props.numberOfFriends} friends</p>
    </div>
  );
};
```

And that's it! There's no more to it. Props are just like arguments.

## Callbacks

Just like you can pass functions as arguments, you can pass functions as props.

In the `FriendsList` component, we'll use the `addFriend` prop as the click handler:

```javascript
const FriendsList = (props) => {
  return (
    <div>
      <p>Hi, {props.name}</p>
      <p>You have {props.numberOfFriends} friends</p>
      <button onClick={props.addFriend}>Add friend</button>
    </div>
  );
};
```

When we render the `FriendsList`, we can pass a function to add a friend.

```javascript
const [numberOfFriends, setNumberOfFriends] = useState(0);

const addFriend = () => setNumberOfFriends(numberOfFriends + 1);

return (
  <div className="App">
    <FriendsList
      name="Jimmy"
      numberOfFriends={numberOfFriends}
      addFriend={addFriend}
    />
  </div>
);
```

This is how the values stored in state can be accessed and changed in child components.

Remember how every time state changes, React rerenders your components? Props are the same. If props change, the component is rendered again using the new values.
