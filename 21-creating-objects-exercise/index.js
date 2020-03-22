/**
 * Exercise 1
 *
 * create an object "user", which has
 * properties "firstName", "lastName" and "age"
 *
 * PS: use console.log() to see the result
 */

const user = {
    firstName: "benny",
    lastName: "polak",
    age: 35
}
console.log(user);
/**
 * Exercise 2
 *
 * create an object "allTypes" with a property of types:
 * string, number, array, object, function, boolean
 *
 * PS: use console.log() to see the result
 */
const allTypes = {
    string: "jumble",
    number: 23,
    array: [1, 2, 4, 5, 7],
    object: {
        oneThing: "good thing",
        secondThing: "bad thing",
        thirdThing: "random thing"
    },
    boolean: false,
    functor: function here() {
        console.log("bring me the money")
    }
};
console.log(allTypes);
/**
 * Exercise 3
 *
 * create a function "createMovieObject" which takes
 * name, rating and ticketPrice and returns a movie object
 * with these properties
 *
 * PS: use console.log() to see the result
 */

function createMovieObject(name, rating, ticketPrice) {
    const movie = {
        name: name,
        rating: rating,
        ticketPrice: ticketPrice

    };

    console.log(movie);
    return movie;
}

createMovieObject("oralndo", 9.6, "10USD");