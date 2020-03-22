/**
 * create an array "animals" with "cat"
 */
const animals = ["cat"];
/**
 * Exercise 1
 *
 * add a "dog" to the end of your 'animals'
 * 
 * PS: console.log() the result to see the difference
 */
animals.push("dog");
console.log(animals);

/**
 * Exercise 2
 *
 * add a "rabbit" to the very beginning of your 'animals'
 * 
 * PS: console.log() the result to see the difference
 */

animals.unshift("rabbit");
console.log(animals);
/**
 * Exercise 3
 *
 * add a "puma" to position 2 in "animals"
 * 
 * PS: console.log() the result to see the difference
 */
animals.splice(1, 0, "puma");
console.log(animals);

/**
 * create an array "wildAnimals" with "lion"
 */

<<<<<<< HEAD
const wildAnimals = ["lion"]
    /**
     * create an array "moreWildAnimals" with "giraffe" and "elephant"
     */
const moreWildAnimals = ["giraffe", "elephant"];
=======
/**
 * create an array "moreWildAnimals" with "giraffe" and "elephant"
 */

>>>>>>> c7330a0e0cf3894447f6e14ca96d0cc3e5c3582b
/**
 * Exercise 4
 *
 * combine wildAnimals and moreWildAnimals into one array
 * and save it into variable combinedWildAnimals
 * 
 * PS: console.log() the result to see the difference
 */
const combinedWildAnimals = wildAnimals.concat(moreWildAnimals);
console.log(combinedWildAnimals);