# Adding Object Properties

```javascript
const room = {
  name: "Bedroom"
};
```

To change the value stored at a key, we can simply use the single equals assignment operator: `room.name = "Bathroom`. We can do the same thing to _add_ properties to an existing object.

## Dot notation

```javascript
room.size = 10;
room.color = "Grey";
room.furniture = ["Table", "Chairs"];
```

We've now added three additional key-value pairs to the object. If we were to view this object now, it would look like this:

```javascript
{
  name: "Bedroom",
  size: 10,
  color: "Grey",
  furniture: ["Table", "Chairs"]
}
```

## Square brackets

We can do the same thing using `[]` square brackets and a corresponding string. This is useful for something dynamic, or if you want the key to have a space in it.

```javascript
const key = "plants";
const value = 5;
room[key] = value;

room["window style"] = "Sash";
```
