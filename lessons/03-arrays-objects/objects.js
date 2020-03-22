// const name = "name"
const jasper = {
  name: "Jasper",
  age: 2,
  breed: "Exotic shorthair",
  "favourite Foods": ["Sardines", "Tuna"]
};

console.log(jasper.name);
console.log(jasper.age);
console.log(jasper);

jasper.BFF = "Archibald";

console.log(jasper);

console.log(jasper["favourite Foods"]);

const curtain = {
  name: "Curtain",
  age: 3,
  breed: "Siamese",
  "favourite Foods": ["Chocolate", "Milk"]
};

const cats = [jasper, curtain];

console.log(cats[0].name);
console.log(cats[1]["favourite Foods"].push("Berries"));
console.log(cats[1]);
