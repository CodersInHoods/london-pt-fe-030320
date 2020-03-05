const name = "Sam";
let age = 29;
let house;

let office = "Wework";

office = 5;

// const lightOn = true;
const ovenOn = false;

// const car;

// console.log(house); // undefined

house = "BIG HOUSE";

// console.log(house);

name;
name;
name;
age;
age;
name + age;

// console.log(age);
age = age + 1; // can't do that
// console.log(age);

// dynamically typed

age = "34tufeibdrgu"; // string
// console.log(age);

const otherAge = age;
// console.log(otherAge);
age = 31;
// console.log(otherAge, age);

// console.log(typeof office);
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof true);
// console.log(typeof undefined);

const time = 1844;
const timeofday = "evening";
// console.log(
//   "hello " + name + " how are you? at " + time + ", good " + timeofday
// );
// console.log(`hello ${name} how are you? at ${time}, good ${timeofday}`);
// console.log(`hello ${450874598}`);

const number1 = 10;
const number2 = 30;
// console.log(number1 * number2);
// console.log(number1 + number2);
// console.log(number1 / number2);
// console.log(number1 - number2);

let lightOn = true;

// console.log(lightOn);

lightOn = false;

// console.log(lightOn);

// ! pling bang operator NOT

// console.log(!lightOn);

lightOn = !lightOn;
lightOn = !lightOn;
lightOn = !lightOn;
lightOn = !lightOn;
lightOn = !lightOn;
lightOn = !lightOn;

// console.log(lightOn);

const isAge31 = age === 31;
const isOver18 = age > 18;

const isNameVasile = name === "Vasile";
// console.log(isAge31);
// console.log(isOver18);
// console.log(isNameVasile);

if (isOver18) {
  //   console.log("This user is allowed in to the bar");
}

if (age > 70) {
  //   console.log("This user is allowed in the the care home");
}

if (5 < 10) {
  //   console.log("yes five is less than 10");
}

let height = 100;
const rideLimit = 150;

// console.log(height);
if (height < rideLimit) {
  height = 151;
}
// console.log(height);

if (lightOn) {
  lightOn = false;
}

greetPerson("Vasile");

const bobbysGreeting = createPersonalisedGreeting("Bobby");
const jesssGreeting = createPersonalisedGreeting("jess");
const gerganasGreeting = createPersonalisedGreeting("gergana");

// console.log(bobbysGreeting);
// console.log(jesssGreeting);
// console.log(gerganasGreeting);

// console.log(isTrue());

// console.log(address(131, "finsbury pavement", "London"));

console.log(multiply(10, 6));

// hoisting

// function declarations
// function expressions

const result = multiply(10, 5);
// console.log(result);
// console.log(multiply(4523.534, 5));
// console.log(4523.534 * 5);
// console.log(22617.67);

function multiply(number1, number2) {
  //   console.log("MULTIPLYING SOMETHING");
  //   console.log(greetPerson("Vasile"));
  return number1 * number2;
}

function greetPerson(name) {
  console.log(`Hello, ${name}!`);
}

function createPersonalisedGreeting(name) {
  return `HIYA, ${name}!`;
}

function isTrue() {
  return true;
}

function address(number, streetName, city) {
  return `${number}, ${streetName}, ${city}`;
}
