# Filtering in React

One of the most significant changes to how you approach React apps instead of vanilla JS is: when to change your variables and to what.

## Filtering a list of products by category

Imagine a page displaying a list of products, each has a category. We've got a set of radio buttons, one for each category. Selecting a radio button updates the list of products to display only products in that category.

Using vanilla JS, you'd listen for an event on the radio buttons. When the event is triggered, you'd filter the products array and update the products being delayed.

In React, when the event is triggered you update the selected category being stored in state. And that's it. You determine which products to display _just before_ they get displayed.

In practice:

```javascript
const [products, setProducts] = useState([]);
const [selectedCategory, setSelectedCategory] = useState("All");

// Change the selected category
const handleChange = (event) => {
  setSelectedCategory(event.target.value);
};

// Determine which products should be rendered
const productsToRender =
  selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

// Listen for the event using the onChange prop
return (
  <div>
    <label>
      All
      <input type="radio" value="All" onChange={handleChange} />
    </label>
    <label>
      Car
      <input type="radio" value="Car" onChange={handleChange} />
    </label>
    <label>
      Bike
      <input type="radio" value="Bike" onChange={handleChange} />
    </label>
    <ul>
      {productsToRender.map((product) => (
        <li>{product.name}</li>
      ))}
    </ul>
  </div>
);
```
