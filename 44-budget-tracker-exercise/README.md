# Emergency Ration Budget App

![demo gif](./example.gif)

## Deliverables

1. Render products into `#products`
    * `products` is an array defined in `products.js`
2. Dropdowns in each product should allow the user to choose `0` to `product.max_quantity`
3. Remaining budget should update when user selects new quantity
    * Starting budget is £50.00
4. If user tries to select products which they cannot afford, a message is displayed for 3 seconds and the select field doesn't retain the selected value

## Product HTML

```HTML
<div>
    <img src="https://i5.walmartimages.com/asr/f1728857-3120-4a4e-b474-d66f8ad1bc77_1.7e41f79bcada186bbbc136d1094be906.jpeg?odnWidth=450&amp;odnHeight=450&amp;odnBg=ffffff" />
    <h3>Hand sanitiser</h3>
    <p>£12.99</p>
    <select>
        <option>0</option>
        <option>1</option>
        <option>2</option>
    </select>
</div>
```

## Insufficient funds message HTML

```HTML
<div class="error">Not enough money left for that!</div>
```
