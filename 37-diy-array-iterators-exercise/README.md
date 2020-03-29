# DIY Array Iterators

A great way to understand how to use something is to figure out how it works by writing your own version.

Here you'll be building your own versions of the various array iterator methods. Of course, this means you should not be using any of these in your code! You'll need to use a loop of some sort, instead.

You will write functions which take 2 (or more!) arguments: `array` and `callback`.

## forEach

The callback is invoked for every element in the array and is passed each element and the index.

## map

The callback is invoked for every element in the array and is passed each element and the index. A new array is returned which contains whatever was returned from each time the callback was invoked.

## filter

The callback is invoked for every element in the array and is passed each element and the index. A new array is returned which contains _only_ the elements for which the callback returned a truthy value.

## find

The callback is invoked for every element in the array and is passed each element and the index. The function returns the _first element_ for which the callback returns a truthy value.

## findIndex

The callback is invoked for every element in the array and is passed each element and the index. The function returns the _index of the first element_ for which the callback returns a truthy value.

## every

The callback is invoked for every element in the array and is passed each element and the index. The function returns a boolean value representing if every time the callback was invoked it returned a truthy value.

## some

The callback is invoked for every element in the array and is passed each element and the index. The function returns a boolean value representing if _any_ time the callback was invoked it returned a truthy value.

## reduce

Reduce is often used for combining values together.

`reduce` should take 3 arguments: `array`, `callback` and `initialValue`.

The callback is invoked for every element in the array and is passed **the current cumulative value**, each element and the index. Whatever the callback returns is the new cumulative value. The function should return the final cumulative value.
