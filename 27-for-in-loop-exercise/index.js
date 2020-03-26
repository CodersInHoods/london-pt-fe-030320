/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

obj = {
    name: "benjamin",
    lastName: "poliak",
    hobby: "banjo",
    FavPlant: "begunvilia"
}

console.log(obj["lastName"]);

function logProperties(object) {
    for (param in object) {
        console.log(`Property name: ${param}`);
    }
}
logProperties(obj);

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

function getAllValues(object) {
    const array = [];
    for (value in object) {
        array.push(object[value]);
    }
    return array;
}
newArray = getAllValues(obj)
console.log(newArray);
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */
function getAllValuesAsString(object) {
    const funcstring = [];
    for (values in object) {
        funcstring.push(object[values]);
        console.log(funcstring);
    }
    joingedfunc = funcstring.join(" ");
    console.log(joingedfunc);
    return joingedfunc;
}
stringFromObject = (getAllValuesAsString(obj));
console.log(stringFromObject);
/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * 'PROPERTY: VALUE'
 */
console.log(`start new::`)

function propertyValueString(object) {
    let collection = ""
    for (values in object) {
        console.log(`${values}: ${object[values]}`);
    }
    return;
}
objecatAndValue = (propertyValueString(obj));