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

const syncCookMeal = (ingredientsToCook) => {
    ingredientsToCook.forEach(element => {
        syncCookIngredient(element);
    });
    console.log("Soup is ready to serve");
}




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
let cooked = [];

const asyncCookIngredient = async({ name, time }) => {
    console.log(`Start cooking ${name}`);
    return await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} cooked!`)
            resolve(name);
        }, time);
    })
}


/**
 * Exercise 3
 *
 * create a function {asyncCookMeal} which will which will receive an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 * 
 * After all the ingredients are cooked,
 * log the message "Soup is ready to serve"
 */

const asyncCookMeal = async(ingredientsToCook) => {
    const array = [];
    return await new Promise((resolve) => {
        ingredientsToCook.forEach((el) => {
            array.push(asyncCookIngredient(el));
        })
        Promise.all(array).then(() => console.log("Soup is ready to serve"));

    })
}
global.console.log = jest.fn();

const ingredientsForTests = [
  { name: "carrot", time: 150 },
  { name: "rice", time: 200 },
];

// Exercise 1
describe("syncCookMeal", () => {
  beforeEach(() => {
    global.console.log.mockClear();
  });

  test("should be a function", () => {
    expect(typeof syncCookMeal).toEqual("function");
  });

  test("should log all messages", async () => {
    syncCookMeal(ingredientsForTests);
    const logQuantity = ingredientsForTests.length * 2 + 1;
    expect(global.console.log).toHaveBeenCalledTimes(logQuantity);
  });
});

// Exercise 2
describe("asyncCookIngredient", () => {
  beforeEach(() => {
    global.console.log.mockClear();
  });

  test("should be a function", () => {
    expect(typeof asyncCookIngredient).toEqual("function");
  });

  test("should call log twice", async () => {
    asyncCookIngredient(ingredientsForTests[0]);

    await new Promise((resolve) =>
      setTimeout(resolve, ingredientsForTests[0].time + 10)
    );

    expect(global.console.log).toHaveBeenCalledTimes(2);
  });

  test("should log a message before set time", async () => {
    asyncCookIngredient(ingredientsForTests[0]);

    expect(global.console.log).toHaveBeenCalledWith(
      `Start cooking ${ingredientsForTests[0].name}`
    );
    expect(global.console.log).not.toHaveBeenCalledWith(
      `${ingredientsForTests[0].name} cooked!`
    );

    await new Promise((resolve) =>
      setTimeout(resolve, ingredientsForTests[0].time + 10)
    );

    expect(global.console.log).toHaveBeenCalledWith(
      `${ingredientsForTests[0].name} cooked!`
    );
  });
});

// Exercise 3
describe("asyncCookMeal", () => {
  beforeEach(() => {
    global.console.log.mockClear();
  });

  test("should be a function", () => {
    expect(typeof asyncCookMeal).toEqual("function");
  });

  test("should log all messages", async () => {
    asyncCookMeal(ingredientsForTests);
    await new Promise((resolve) =>
      setTimeout(
        resolve,
        Math.max(...ingredientsForTests.map((i) => i.time)) + 10
      )
    );
    const logQuantity = ingredientsForTests.length * 2 + 1;
    expect(global.console.log).toHaveBeenCalledTimes(logQuantity);
  });

  test("should log ready message only after all ingredients are cooked", async () => {
    asyncCookMeal(ingredientsForTests);
    expect(global.console.log).not.toHaveBeenCalledWith(
      "Soup is ready to serve"
    );

    await new Promise((resolve) =>
      setTimeout(
        resolve,
        Math.max(...ingredientsForTests.map((i) => i.time)) + 10
      )
    );

    expect(global.console.log).toHaveBeenCalledWith("Soup is ready to serve");
  });
});
