const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

const syncCookIngredient = ({ name, time }) => {
  const start = Date.now();
  console.log(`Start cooking ${name}`);
  while (start + time > Date.now()) {}

  console.log(`${name} cooked!`);
};

/**
 * Exercise 1
 *
 * create a function {syncCookMeal} which will recieve an
 * array of {ingredientsToCook}, (similar to the array
 * defined on line 1) and call {syncCookIngredient} 
 * for each ingredient in the array
 * 
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */



/**
 * Exercise 2
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 * 
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 * 
 * Log out the message "Start cooking INGREDIENT_NAME"
 * then after the cooking time has elapsed,
 * log out "INGREDIENT_NAME cooked!". Both times displaying
 * the name of the ingredient.
 *
 */

/**
 * Exercise 3
 *
 * create a function {asyncCookMeal} which will which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * eahc ingredient
 * 
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

