describe("coerced equality: ==", () => {
  test("targetMatchesCoercedUserValue is true", () => {
    expect(targetMatchesCoercedUserValue).toBeDefined();
    expect(targetMatchesCoercedUserValue).toBe(true);
  });
});

describe("strict equality: ===", () => {
  test("targetMatchesUserValue is false", () => {
    expect(targetMatchesUserValue).toBeDefined();
    expect(targetMatchesUserValue).toBe(false);
  });
  test("passwordMatchesConfirmation is false", () => {
    expect(passwordMatchesConfirmation).toBeDefined();
    expect(passwordMatchesConfirmation).toBe(false);
  });
});

describe("if statements", () => {
  test('passwordMessage is "Oops, your password and confirmation do not match!"', () => {
    expect(passwordMessage).toBeDefined();
    expect(passwordMessage).toBe(
      "Oops, your password and confirmation do not match!"
    );
  });
  test('fruits is "banana, cherry, watermelon" because sortOrder is "ALPHABETICAL"', () => {
    expect(fruits).toBeDefined();
    expect(fruits).toBe("banana, cherry, watermelon");
  });
});
