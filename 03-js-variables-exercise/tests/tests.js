test("`username` is defined", () => {
  expect(username).toBeDefined();
});

test("`username` is a string", () => {
  expect(typeof username).toBe("string");
});

test("`username` cannot be reassigned", () => {
  expect(() => {
    username = "Hello";
  }).toThrow();
});

test("`age` is defined", () => {
  expect(age).toBeDefined();
});

test("`age` can be reassigned", () => {
  const previousAge = age;
  expect(() => {
    age = age + 1;
  }).not.toThrow();
  expect(age).toEqual(previousAge + 1);
});
