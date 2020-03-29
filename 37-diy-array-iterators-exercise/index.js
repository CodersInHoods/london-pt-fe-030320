/**
 * Exercise #1
 *
 * forEach(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is
 * passed each element and the index.
 *
 */

const forEach = (array, callback) => {
  for (const el of array) {
    callback(el, array.indexOf(el));
  }
};

/**
 * Exercise #2
 *
 * map(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * whatever was returned from each
 * time the callback was invoked.
 *
 */

const map = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el, array.indexOf(el)));
  }
  return newArr;
};

/**
 * Exercise #3
 *
 * filter(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. A new
 * array is returned which contains
 * _only_ the elements for which the
 * callback returned a truthy value.
 *
 */

const filter = (array, callback) => {
  const newArr = [];
  for (const el of array) {
    if (callback(el, array.indexOf(el))) {
      newArr.push(el);
    }
  }
  return newArr;
};

/**
 * Exercise #4
 *
 * find(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _first element_
 * for which the callback returns a
 * truthy value.
 *
 */

const find = (array, callback) => {
  let match;
  for (const el of array) {
    if (callback(el, array.indexOf(el))) {
      match = el;
      break;
    }
  }
  return match;
};

/**
 * Exercise #5
 *
 * findIndex(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns the _index of
 * the first element_ for which the
 * callback returns a truthy value.
 *
 */

const findIndex = (array, callback) => {
  let index;
  for (const el of array) {
    if (callback(el, array.indexOf(el))) {
      index = array.indexOf(el);
      break;
    }
  }
  return index;
};
/**
 * Exercise #6
 *
 * every(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if every time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const every = (array, callback) => {
  let all = true;
  for (const el of array) {
    if (!callback(el, array.indexOf(el))) {
      all = false;
      break;
    }
  }
  return all;
};

/**
 * Exercise #7
 *
 * some(array, callback)
 *
 * The callback is invoked for every
 * element in the array and is passed
 * each element and the index. The
 * function returns a boolean value
 * representing if _any_ time the
 * callback was invoked it returned
 * a truthy value.
 *
 */

const some = (array, callback) => {
  let any = false;
  for (const el of array) {
    if (callback(el, array.indexOf(el))) {
      any = true;
      break;
    }
  }
  return any;
};

/**
 * Exercise #8
 *
 * reduce(array, callback, initialValue)
 *
 * Reduce is often used for combining
 * values together.
 *
 * `reduce` should take 3 arguments:
 * `array`, `callback` and `initialValue`.
 *
 * The callback is invoked for every
 * element in the array and is passed
 * **the current cumulative value**,
 * each element and the index. Whatever
 * the callback returns is the new
 * cumulative value. The function
 * should return the final cumulative
 * value.
 *
 */

const reduce = (array, callback, initialValue = 0) => {
  let acca = initialValue;

  for (const el of array) {
    acca = callback(acca, el, array.indexOf(el));
  }

  return acca;
};
