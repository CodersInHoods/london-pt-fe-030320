# Forms in React

As usual when building websites, we need to use forms. In React, we need to make our input fields **controlled components**. This means there's a two-way relationship between the field and the corresponding value in state. Whenever the field changes, the state updates and whenever the state changes, the field updates.

## Controlled Components

For an input field to qualify as a controlled components, it must recieve a `value` prop and an `onChange` prop. `value` is the current value, probably from state. `onChange` is a function to handle the event.

```javascript
const [name, setName] = useState("");

return (
  <input
    type="text"
    value={name}
    onChange={(event) => setName(event.target.value)}
  />
);
```

In the above example, we're using an inline arrow function. It's better practice to create this in a variable and pass a reference. It makes the JSX more readable, and only concerned with how the component is displayed, not what it does.

```javascript
const [name, setName] = useState("");

const handleNameChange = (event) => setName(event.target.value);

return <input type="text" value={name} onChange={handleNameChange} />;
```

## Form data

Usually we have more than one field in a form, and each field probably corresponds to a key in an object. The function to handle the change event should update a value in an object instead of a single value in state.

Each input field should have some way to determine which key it is related to. This is often the `name` attribute but it could be `className` or `id`.

We'll use this as the key, and the value of the input field as the value:

```javascript
const [petInfo, setPetInfo] = useState({
  name: "",
  weight: 0,
  breed: "",
});

const handleChange = (event) => {
  useState({
    ...petInfo,
    [event.target.name]: event.target.value,
  });
};

return (
  <form>
    <input
      type="text"
      name="name"
      value={petInfo.name}
      onChange={handleChange}
    />
    <input
      type="number"
      name="weight"
      value={petInfo.weight}
      onChange={handleChange}
    />
    <input
      type="text"
      name="breed"
      value={petInfo.breed}
      onChange={handleChange}
    />
  </form>
);
```

## Improving the quality of data

In the form above, the weight will be stored as a string, despite marking the field as `type="number"`. We'll need to parse the string into an integer.

Also, the `breed` field is text which means the user can enter anything they like, but we might want to limit them using a dropdown.

```javascript
const [petInfo, setPetInfo] = useState({
  name: "",
  weight: 0,
  breed: "",
});

const handleChange = (event) => {
  useState({
    ...petInfo,
    [event.target.name]:
      event.target.type === "number"
        ? parseInt(event.target.value)
        : event.target.value,
  });
};

return (
  <form>
    <input
      type="text"
      name="name"
      value={petInfo.name}
      onChange={handleChange}
    />
    <input
      type="number"
      name="weight"
      value={petInfo.weight}
      onChange={handleChange}
    />
    <select name="breed" value={petInfo.breed} onChange={handleChange}>
      <option>Spaniel</option>
      <option>Dalmation</option>
      <option>Poodle</option>
      <option>Bloodhound</option>
      <option>Shiba Inu</option>
    </select>
  </form>
);
```

## Submitting the form

Finally, we need to submit the form. You might guess that we use the prop `onSubmit` to handle the submit event.

```javascript
const handleSubmit = (event) => {
  event.preventDefault();

  API.postPetInfo(petInfo);

  // to reset the form
  setPetInfo({
    name: "",
    weight: 0,
    breed: "",
  });
};

return (
  <form onSubmit={handleSubmit}>
    ...
  </form>
);
```
