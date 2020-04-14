const algorithms = require("./index.js");



// factorial(5) === 120
// factorial(0) === 1
// factorial(10) === 3628800


test('factorial 5 should return 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial 0 should return 1', () => {
    expect(factorial(0)).toBe(1);
});

test('factorial 10 should return 3628800', () => {
    expect(factorial(10)).toBe(3628800);
});