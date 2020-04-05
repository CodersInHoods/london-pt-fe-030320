/**
 * Exercise 1
 *
 * select p tags with getElementsByTagName and assign it
 * to variable {paragraphs}
 */

let paragraphs = document.getElementsByTagName("p");
paragraphs;
/**
 * Exercise 2
 * select the first p tag with getElementsByTagName and assign it
 * to variable {firstParagraph}
 */

let firstParagraph = document.getElementsByTagName("p")[0];
firstParagraph;


/**
 * Exercise 3
 *
 * create a function {logAllParagraphs} and with forEach
 * to log each paragraph from {paragraphs}
 *
 * ATTENTION: check the type of {paragraphs} before doing forEach
 */

function logAllParagraphs() {
    for (let item of paragraphs) {
        console.log(item);
    }
}




/**
 * Exercise 4
 *
 * select all elements with class "text" with getElementsByClassName
 * and assign it to variable {textElements}
 */

const textElements = document.getElementsByClassName("text");

/**
 * Exercise 5
 *
 * select all elements that have classes "text" and "green"
 * with getElementsByClassName and assign it to variable {greenText}
 */

const greenText = document.getElementsByClassName("green text");

/**
 * Exercise 6
 *
 * select element where id is 'textId-3'(use getElementById) and assign it
 * to variable {thirdText}
 */

const thirdText = document.getElementById("kitten");


/* ==================================================== */
/*                  querySelector section               */
/* ==================================================== */
// !!! For this section use querySelector or querySelectorAll only !!!

/**
 * Exercise 7
 *
 * select the fourth "li" element and save it to {fourthListElement} variable
 */

const fourthListElement = document.querySelector("li:nth-of-type(4)");

/**
 * Exercise 8
 *
 * select all "li" elements and save it to {listElements} variable
 */

const listElements = document.querySelectorAll("li");

/**
 * Exercise 8
 *
 * select all "a" elements that are inside "ul" and assign it {listLinks}
 */

const listLinks = document.querySelectorAll("ul > a");

/**
 * Exercise 9
 *
 * select elements where the "data-community-name" attribute
 * is "codersinhoods" and assign it {communityElements}
 */

const communityElements = document.querySelectorAll("[data-community-name]");

/**
 * Exercise 10
 *
 * select all elements with class "test" and assign it to a variable
 * {elementsForTesting}
 */
const elementsForTesting = document.querySelectorAll(".test");

/**
 * Exercise 11
 *
 * select the element with id "test-5" and assign it to a variable
 * {fifthTest}
 */

const fifthTest = document.getElementById("test-5");

/**
 * Exercise 12
 *
 * select all the elements which are siblings of an element
 * with the class "links" and assign it to a variable {nextElements}
 */
const nextElements = []
const bodyEl = document.querySelector(".links").nextElementSibling;
nextElements.push(bodyEl);