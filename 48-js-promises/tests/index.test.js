const ingredients = [
    { name: "carrot", time: 500 },
    { name: "potato", time: 1000 },
    { name: "onion", time: 250 },
    { name: "celery", time: 150 },
    { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */

const asyncCookIngredient = async({ name, time }) => {
    return await new Promise((resolve) => {
        setTimeout(() => { resolve({ name, time }) }, time);
    })
}

/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */


const asyncCookMeal = async(ingredientsToCook) => {
    return await new Promise((resolve) => {
        const array = ingredientsToCook.map(el => asyncCookIngredient(el));
        Promise.all(array).then((array) => {
            const ingredientNames = array.map(el => el.name);
            const timeArray = array.map(el => parseInt(el.time));
            const totalTime = timeArray.reduce((a, b) => a + b);
            console.log(totalTime);
            const obj = {
                ingredientNames: ingredientNames,
                totalTime: totalTime
            };
            resolve(obj);
        });

    })
}


asyncCookMeal(ingredients).then((obj) => console.log(obj));
const ingredientsForTests = [
  { name: "carrot", time: 150 },
  { name: "rice", time: 200 },
];

// Exercise 1
describe("asyncCookIngredient", () => {
  test("should be a function", () => {
    expect(typeof asyncCookIngredient).toEqual("function");
  });
  test("should return a promise", () => {
    expect(asyncCookIngredient(ingredientsForTests[0]) instanceof Promise).toBe(
      true
    );
  });

  test("promise should resolve with ingredient", async () => {
    const resolvedIngredient = await asyncCookIngredient(
      ingredientsForTests[0]
    );
    expect(resolvedIngredient).toEqual(ingredientsForTests[0]);
  });

  test("promise should take correct time to before resolving", async () => {
    const startTime = Date.now();
    await asyncCookIngredient(ingredientsForTests[0]);
    const elapsedTime = Date.now() - startTime;

    const notTooFast = elapsedTime > ingredientsForTests[0].time - 50;
    const notTooSlow = elapsedTime < ingredientsForTests[0].time + 50;
    expect(notTooFast && notTooSlow).toEqual(true);
  });
});

// Exercise 3
describe("asyncCookMeal", () => {
  test("should be a function", () => {
    expect(typeof asyncCookMeal).toEqual("function");
  });
  test("should return a promise", () => {
    expect(asyncCookMeal(ingredientsForTests) instanceof Promise).toBe(true);
  });

  test("promise should resolve with object", async () => {
    const resolvedObject = await asyncCookMeal(ingredientsForTests);
    expect(resolvedObject).toEqual({
      ingredientNames: ["carrot", "rice"],
      totalTime: 350,
    });
  });

  test("promise should take correct time to before resolving", async () => {
    const startTime = Date.now();
    await asyncCookMeal(ingredientsForTests);
    const elapsedTime = Date.now() - startTime;

    const longestCookTime = Math.max(...ingredientsForTests.map((i) => i.time));
    const notTooFast = elapsedTime > longestCookTime - 50;
    const notTooSlow = elapsedTime < longestCookTime + 50;
    expect(notTooFast && notTooSlow).toEqual(true);
  });
});
