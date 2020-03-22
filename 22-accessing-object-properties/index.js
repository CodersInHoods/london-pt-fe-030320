// **** DO NOT MODIFY THIS OBJECT ****
// ============================
const user = {
    type: "admin",
    firstName: "Alex",
    lastName: "Smith",
    password: "12345",
    age: 26,
    favoriteMovies: ["Interstellar", "The Wolf of Wall Street"],
    parents: {
        mother: {
            firstName: "Julia",
            lastName: "Smith"
        },
        father: {
            firstName: "John",
            lastName: "Smith"
        }
    }
};
// ============================

/**
 * Exercise 1
 *
 * create a variable "userFirstName"
 * and assign "user" first name to it.
 *
 * PS: use console.log() to see the result
 */
const userFirstName = user.firstName;
console.log(userFirstName);
/**
 * Exercise 2
 *
 * create a variable "favoriteMovie"
 * and assign first item from "user"
 * favoriteMovies array.
 *
 * PS: use console.log() to see the result
 */
const favoriteMovie = user.favoriteMovies[0];
console.log(favoriteMovie);
/**
 * Exercise 3
 * create "userFullName" that equals to
 * "user" first name concatenated with last name,
 * separated with space
 *
 * PS: use console.log() to see the result
 */
const userFullName = `${user.firstName} ${user.lastName}`;
console.log(userFullName);
/**
 * Exercise 4
 *
 * create a function "getFullName"
 * which return full name of our user.
 *
 * PS: use console.log() to see the result
 */
function getFullName() {
    const userFullName = `${user.firstName} ${user.lastName}`;
    console.log(userFullName);
    return userFullName;

}
getFullName();

/**
 * Exercise 5
 *
 * create a variable mothersFirstName and assign
 * mothers first name of our user
 *
 * PS: use console.log() to see the result
 */
const mothersFirstName = user.parents.mother.firstName;


/**
 * Exercise 6
 *
 * create a function "getParentFullName"
 * which takes parent type(mother or father) and return
 * full name of that person.
 *
 * PS: use console.log() to see the result
 */
function getParentFullName(type) {
    const fullNameParent = user.parents[type].firstName + ` ` + user.parents[type].lastName;
    console.log(fullNameParent);
    return fullNameParent;
}
getParentFullName("father");
/**
 * Exercise 7
 *
 * create a function getUserData which will take
 * a property name as a parameter and return the value
 *
 * * PS: use console.log() to see the result
 */
function getUserData(param) {
    result = user[param];
    console.log(result)
    return result
}


getUserData("age");