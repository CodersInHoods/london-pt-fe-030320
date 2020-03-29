global.console = {
  log: jest.fn()
};

const numbers = [0, 1, 2, 3, 4, 12, 13, 20];
const strings = ["London", "Manchester", "Chicago", "Detroit", "Mumbai"];

const doubler = jest.fn(number => number * 2);
const timesIndex = jest.fn((number, i) => number * i);
const firstLetter = jest.fn(string => string[0]);
const isEven = jest.fn(number => number > 0 && number % 2 === 0);
const longerThan6 = jest.fn(string => string.length > 6);
const longerThan2 = jest.fn(string => string.length > 2);
const multipleOfSix = jest.fn(number => number > 0 && number % 6 === 0);
const findCity = jest.fn(targetCity => jest.fn(city => targetCity === city));
const everyOtherElement = jest.fn((el, i) => i % 2 === 0);

const logArgs = jest.fn((el, i) => console.log(`el: ${el}, i: ${i}`));

beforeEach(() => {
  jest.clearAllMocks();
});

// Exercise #1
describe("forEach", () => {
  test("forEach is a function", () => {
    expect(typeof forEach).toEqual("function");
  });

  test("forEach invokes callback with each element and index", () => {
    forEach(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });
});

// Exercise #2
describe("map", () => {
  test("map is a function", () => {
    expect(typeof map).toEqual("function");
  });

  test("map invokes callback with each element and index", () => {
    map(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });

  test("map returns new array of returned values", () => {
    const doubled = map(numbers, doubler);
    expect(doubler).toHaveBeenCalledTimes(numbers.length);
    expect(doubled).toEqual(numbers.map(doubler));

    const initials = map(strings, firstLetter);
    expect(firstLetter).toHaveBeenCalledTimes(strings.length);
    expect(initials).toEqual(strings.map(firstLetter));

    const multipliedByIndex = map(numbers, timesIndex);
    expect(timesIndex).toHaveBeenCalledTimes(numbers.length);
    expect(multipliedByIndex).toEqual(numbers.map(timesIndex));
  });
});

// Exercise #3
describe("filter", () => {
  test("filter is a function", () => {
    expect(typeof filter).toEqual("function");
  });

  test("filter invokes callback with each element and index", () => {
    filter(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });

  test("filter returns new array of only elements where callback returned truthy", () => {
    const evens = filter(numbers, isEven);
    expect(isEven).toHaveBeenCalledTimes(numbers.length);
    expect(evens).toEqual(numbers.filter(isEven));

    const longNames = filter(strings, longerThan6);
    expect(longerThan6).toHaveBeenCalledTimes(strings.length);
    expect(longNames).toEqual(strings.filter(longerThan6));
  });
});

// Exercise #4
describe("find", () => {
  test("find is a function", () => {
    expect(typeof find).toEqual("function");
  });

  test("find invokes callback with each element and index", () => {
    find(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });

  test("find returns first element where callback returned truthy", () => {
    const even = find(numbers, isEven);
    expect(isEven).toHaveBeenCalledTimes(3);
    expect(even).toEqual(numbers.find(isEven));

    const findLondon = findCity("London");
    const london = find(strings, findLondon);
    expect(findLondon).toHaveBeenCalledTimes(1);
    expect(london).toEqual(strings.find(findLondon));
  });
});

// Exercise #5
describe("findIndex", () => {
  test("findIndex is a function", () => {
    expect(typeof findIndex).toEqual("function");
  });

  test("findIndex invokes callback with each element and index", () => {
    findIndex(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });

  test("findIndex returns the index of the first element where callback returned truthy", () => {
    const evenIndex = findIndex(numbers, isEven);
    expect(isEven).toHaveBeenCalledTimes(3);
    expect(evenIndex).toEqual(numbers.findIndex(isEven));

    const findMumbai = findCity("Mumbai");
    const Mumbai = findIndex(strings, findMumbai);
    expect(findMumbai).toHaveBeenCalledTimes(strings.indexOf("Mumbai") + 1);
    expect(Mumbai).toEqual(strings.findIndex(findMumbai));
  });
});

// Exercise #6
describe("every", () => {
  test("every is a function", () => {
    expect(typeof every).toEqual("function");
  });

  test("every invokes callback with each element and index", () => {
    every(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(1);
    expect(logArgs).toHaveBeenCalledWith(numbers[0], 0);
  });

  test("every returns a boolean representing that callback returned truthy for every element", () => {
    const allAreEven = every(numbers, isEven);
    expect(typeof allAreEven).toEqual("boolean");
    expect(isEven).toHaveBeenCalledTimes(1);
    expect(allAreEven).toEqual(numbers.every(isEven));

    const allAreLong = every(strings, longerThan2);
    expect(typeof allAreLong).toEqual("boolean");
    expect(longerThan2).toHaveBeenCalledTimes(strings.length);
    expect(allAreLong).toEqual(strings.every(longerThan2));
  });
});

// Exercise #7
describe("some", () => {
  test("some is a function", () => {
    expect(typeof some).toEqual("function");
  });

  test("some invokes callback with each element and index", () => {
    some(numbers, logArgs);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(number, i);
    });
  });

  test("some returns a boolean representing that callback returned truthy for any element", () => {
    const someAreEven = some(numbers, isEven);
    expect(typeof someAreEven).toEqual("boolean");
    expect(isEven).toHaveBeenCalledTimes(3);
    expect(someAreEven).toEqual(numbers.some(isEven));

    const someAreLong = some(strings, longerThan2);
    expect(typeof someAreLong).toEqual("boolean");
    expect(longerThan2).toHaveBeenCalledTimes(1);
    expect(someAreLong).toEqual(strings.some(longerThan2));
  });
});

// Exercise #8
describe("reduce", () => {
  test("reduce is a function", () => {
    expect(typeof reduce).toEqual("function");
  });

  test("reduce invokes callback with accumulator value, each element and index", () => {
    reduce(numbers, logArgs, 0);
    expect(logArgs).toHaveBeenCalledTimes(numbers.length);
    numbers.forEach((number, i) => {
      expect(logArgs).toHaveBeenCalledWith(i === 0 ? 0 : undefined, number, i);
    });
  });

  test("reduce returns the final accumulated value", () => {
    const total = reduce(numbers, (s, n) => s - n, 100);
    expect(total).toEqual(numbers.reduce((s, n) => s - n, 100));
  });

  test("reduce assumes the inital value is 0 if nothing else is passed", () => {
    const total = reduce(numbers, (s, n) => s + n);
    expect(total).toEqual(numbers.reduce((s, n) => s + n));
  });

  test("reduce can be used to construct objects", () => {
    const cities = reduce(
      strings,
      (obj, city, i) => {
        return {
          ...obj,
          [city]: numbers[i]
        };
      },
      {}
    );
    expect(cities).toEqual(
      strings.reduce((obj, city, i) => {
        return {
          ...obj,
          [city]: numbers[i]
        };
      }, {})
    );
  });
});
