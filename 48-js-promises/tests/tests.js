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
