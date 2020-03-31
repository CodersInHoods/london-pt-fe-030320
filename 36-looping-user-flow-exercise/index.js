// install and  import "readline-sync" npm package before you do exercises
readlineSync = require('readline-sync');

let selectedItems = {
    book: "",
    movie: "",
    nextTrip: ""
};

const movies = [
    "The Invisible Man",
    "Never Rarely Sometimes Always",
    "Gretel & Hansel",
    "No time to die",
    "Bloodshot",
    "Onward",
    "Sonic"
];

const books = [
    "My Dark Vanessa",
    "Uncanny Valley",
    "Weather",
    "The night watchman",
    "All adults here",
    "Dear Edward",
    "Grown ups"
];

const countries = [
    "Italy",
    "France",
    "Germany",
    "Spain",
    "Portugal",
    "Denmark",
    "Netherland"
];

const mainMenu = [
    `books`,
    `movies`,
    `Next destination`,
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
user = {};

index = readlineSync.keyInSelect(books, "which book?");
user.book = books[index];
console.log(user);

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

index = readlineSync.keyInSelect(movies, "which movie?");
user.movie = movies[index];
console.log(user);

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

index = readlineSync.keyInSelect(countries, "which countries?");
user.country = countries[index];
console.log(user);
/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */