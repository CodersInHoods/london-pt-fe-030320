// install and  import "readline-sync" npm package before you do exercises
readlineSync = require('readline-sync');

const selectedItems = {
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

userFill()

function selectBook() {
    index = readlineSync.keyInSelect(books, "which book?", { cancel: 'Main menu' });
    console.log(index);
    if (index === -1) {
        return userFill()
    } else {
        user.book = books[index];
        selectedItems.book = books[index];
        console.log(user);
        return userFill()
    }
}


/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

function selectMovie() {
    index = readlineSync.keyInSelect(movies, "which movie?", { cancel: 'Main menu' });
    console.log(index);
    if (index === -1) {
        return userFill()
    } else {
        user.movie = movies[index];
        selectedItems.movie = movies[index];
        return userFill()
    }
}


/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */
function selectCountry() {
    index = readlineSync.keyInSelect(countries, "Next trip?", { cancel: 'Main menu' });
    console.log(index);
    if (index === -1) {
        return userFill()
    } else {
        user.country = countries[index];
        selectedItems.nextTrip = countries[index];
        console.log(selectedItems.nextTrip);
        return userFill()
    }
}


/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

function userFill() {
    console.log(`current selections ${selectedItems}`);
    index = readlineSync.keyInSelect(mainMenu, "What category?"), { cancel: 'Exit' };
    console.log(index);
    if (index === 0) {
        return selectBook()
    } else if (index === 1) {
        return selectMovie()
    } else if (index === 2) {
        return selectCountry()
    } else if (index === -1) {
        return console.log('thank you for playing')
    }
}
// Exercise #
describe("", () => {
	test("", () => {});
});
