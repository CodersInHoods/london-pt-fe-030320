// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================


/**
 * Exercise 1 
 * 
 * add property "firstName" to "user" and assign any name 
 */
user.firstName = "benjamin";
console.log(user);
/**
 * Exercise 2
 * 
 * add property "lastName" to "user" and assign any last name 
 */
user.lastName = "pol";
console.log(user);
/**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */
function addANewProperty(propertyName, propertyValue) {
    user[propertyName] = propertyValue;
    return
}

addANewProperty("height", 23.3)

console.log(user);
// Exercise 1
describe("firstName", () => {
	test("user has property 'firstName'", () => {
		expect(user.firstName).toBeTruthy()
	});

	test("user firstName is a string", () => {
		expect(typeof user.firstName).toEqual('string')
	});
});

// Exercise 2
describe("lastName", () => {
	test("user has property 'lastName'", () => {
		expect(user.lastName).toBeTruthy()
	});

	test("user lastName is a string", () => {
		expect(typeof user.lastName).toEqual('string')
	});
});

// Exercise 3
describe("addANewProperty", () => {
	test("addANewProperty is declared", () => {
		expect(typeof addANewProperty).toEqual('function')
	});

	test("addANewProperty set a new property with a new value", () => {
		addANewProperty('age', 25);

		expect(user.age).toEqual(25)
	});
});
