const names = ["sam", "vasile", "mimi", "archibald"];

const person = {
  name: "sam"
};

// const names = {
//     0: "sam",
//     1: "vasile",
//     2: "mimi",
//     length: 3
// }

console.log(typeof person);
console.log(typeof names);
console.log(Array.isArray(names));

// names[0]
// person["name"]

const ages = [346, 235, 2, 56];

const functions = [
  function() {
    console.log("first function in my list of functions");
    return "return value from first function";
  },
  function() {
    console.log("second function in my list of functions");
  },
  function() {
    console.log("third function in my list of functions");
  }
];

// const randomThings = ["hi", true, 30, function() {}, [5, ["goodbye"]]];

// randomThings[randomThings.length - 1][1][0];

const first = names[0];
const last = names[names.length - 1];
console.log(first, last);

const moreNames = [first, last, "benny"];

console.log(moreNames);

function firstAndLastInTheirOwnArray(array) {
  return [array[0], array[array.length - 1]];
}

console.log(firstAndLastInTheirOwnArray(names));
console.log(firstAndLastInTheirOwnArray([6, 3, 7, 4, 6, 45]));

function nextPersonInLine(currentLine) {
  const personToBeServed = currentLine.shift();
  console.log(`next person to be served is ${personToBeServed}`);
}

function joinTheLine(name, currentLine) {
  const newLength = currentLine.push(name);
  console.log(`${name} is currently ${newLength} in line`);
}

function ejectRowdyPeople(
  numberOfPeopleToEject,
  firstPersonToEject,
  currentLine
) {
  const indexOfPersonToEject = currentLine.indexOf(firstPersonToEject);
  const ejectedPeople = currentLine.splice(
    indexOfPersonToEject,
    numberOfPeopleToEject
  );
  console.log(
    `${ejectedPeople.join(" and ")} have been ejected from the line!!`
  );
}

function impatientPersonLeavesLine(currentLine) {
  const personWhoLeftLine = currentLine.pop();
  console.log(`${personWhoLeftLine} got impatient and left the line`);
}

joinTheLine("patrick", names);
joinTheLine("florence", names);

// pass by reference
nextPersonInLine(names);
nextPersonInLine(names);
joinTheLine("malika", names);
nextPersonInLine(names);
joinTheLine("benny", names);
nextPersonInLine(names);
joinTheLine("gergana", names);

// console.log(names.indexOf("gergana"));

// ejectRowdyPeople(3, "malika", names);

console.log(names);
console.log(`${names}`);
console.log(names.join(" and "));

impatientPersonLeavesLine(names);
console.log(names.length);

console.log(functions[0]());

const someFunctions = functions.splice(1, 1);
const aFunction = someFunctions[0];
console.log(aFunction);
aFunction();

// names.shift();
// names.unshift("joe");
// names.push("joe");
// names.pop();

function reverseTheLineOrder(currentLine) {
  currentLine.reverse();
}

reverseTheLineOrder(names);
console.log(names);

console.log(names.sort());
console.log(ages.sort());
