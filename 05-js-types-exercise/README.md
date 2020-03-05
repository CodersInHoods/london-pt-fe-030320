# Coders in Hoods JS exercise template

## Structure

The student writes their code in `index.js`.

The tests are written in `tests/tests.js`.

There is also `package.json`, `.gitignore` and `README.md`.

## Usage

The student runs `npm test` in their terminal. This concatenates their `index.js` and our `tests/tests.js` files into `tests/index.test.js` then runs `jest`.

The reason for this concatenation is to remove the need for defining `module.exports` in `index.js`. This would be confusing for beginners.
