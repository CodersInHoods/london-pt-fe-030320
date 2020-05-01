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
