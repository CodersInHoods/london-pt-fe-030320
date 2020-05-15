// class Person

// 	attributes: “name”, “age”, “location”

// 	get name()
// 		return attributes.name

// 	set age(newAge)
// 		attributes.age = newAge

class Person {
  constructor(name, age, location, friends = []) {
    this._name = name;
    this._age = age;
    this._location = location;
    this._friends = friends;
  }

  sayYourName() {
      console.log(`my name is ${this._name}`)
  }

  greet() {
      this.sayYourName()
      console.log("how are you")
  }

  doSomething() {
      console.log("do it")
  }

  get age() {
      return this._age
  }

  set age(newAge) {
      if (typeof newAge !== "number") throw new Error("OOPS");
      this._age = newAge;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName.split("")[0].toUpperCase();
  }

  get oldestFriend() {
    return ([...this._friends].sort(
      (friendA, friendB) => friendB.age - friendA.age
    ))[0];
  }
}

module.exports = Person


const sam = new Person("Sam", 29, "london");

const vasile = new Person("Vasile", 30, "london", [
  new Person("Sam", 25, "london"),
  new Person("Sam", 16, "london"),
  new Person("Sam", 37, "london"),
]);

console.log(sam);
console.log(sam.name);
console.log(vasile);
console.log(vasile.name);

sam.name = "Sammy b";

console.log(sam);

console.log(vasile.oldestFriend)

// vasile.age = "32"