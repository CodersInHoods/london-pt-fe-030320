/**
 * Exercise 1
 *
 * create a function "myName" which takes param(string)
 * of your name and console.log "My name is YOUR_NAME"
 */

function myName(name) {
    console.log('My name is ' + name);
}
myName("benny");

/**
 * Exercise 2
 *
 * create a function "myAge" which takes param(string)
 * of your age and console.log "I'm YOUR_AGE years old"
 */
function myAge(age) {
    console.log("I'm " + age + " years old");
}
myAge(35);
/**
 * Exercise 3
 *
 * create a function "aboutMe" which takes 2 params
 * your original city and country and console.log
 * "I'm from YOUR_CITY, YOUR_COUNTRY"
 */
function aboutMe(city, country) {
    console.log("I'm from " + city + ", " + country);
}
aboutMe('london', 'UK');

/**
 * Exercise 4
 * create a function "log12" which will take any 2 numbers
 * as params and log sum.
 */
function logSum(num1, num2) {
    console.log(num1 + num2);
}
logSum(12, 43);