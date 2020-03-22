# `for...of` loops

When we looked at `for` loops, what were we doing the majority of the time we used them?

<details>
  <summary>Answer</summary>
  
  Iterating over each element in an array.
  
</details>

Because this is one of the most common use cases for a loop, Javascript gives us another type of loop: `for...of`.

_For_ each element _of_ an array, do something with that element.

```javascript
const donuts = ["Jam", "Custard", "Chocolate", "Ring"];

for (const donut of donuts) {
  console.log(`A ${donut} donut! Tasty!`);
}
```

Every time this loop runs, a new variable `donut` is created and is assigned an element in the `donuts` array.
