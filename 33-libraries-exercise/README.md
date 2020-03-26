# Libraries

If you had to write _all_ the code to make an app run on a computer, you'd need to write machine code, compilers, interpreters before you even get close to seeing "Hello, world!".

In a similar way, developers use libraries to speed up the development process or add functionality that isn't available to them out of the box.

Note: libraries are known by a variety of names: modules, components, packages, gems, libs, dependencies and more. In the JS world, they are generally known as libraries or packages.

## `npm`

`npm` is the Node Package Manager, it's the tool we use to install new libraries for use in our code.

To install a library, you run `npm install PACKAGE-NAME` in your terminal.

The files are downloaded into a `node_modules` folder. Take a look inside a `node_modules` folder and you'll see there are _loads_ of folders inside. These are all the libraries that each library uses. Each of _those_ libraries might have libraries and so on. Each library is a dependency, this is known as the dependency tree.

## `require`

To use the library in your code, use `require`.

`require` looks at all the files inside your `node_modules` folder and loads up the library with the name you pass to require.

If you've installed the [lodash](https://lodash.com/) package, you'd call `require("lodash")`. This returns whatever is _exported_ from the package file.

```javascript
const lodash = require("lodash");

lodash.chunk(["a", "b", "c", "d"], 2);
// => [['a', 'b'], ['c', 'd']]
```

Note: lodash is actually a term for an underscore, so this library is often saved to a variable called `_`.

## Documentation

Now you're using code written by other people, you're going to be reading a lot of documentation. This will be confusing and frustrating at first, but read enough documentation and you'll get used to it. Some documentation is _just bad_, so sometimes it's difficult for even experienced developers. Don't be disheartened when you don't understand how to use a library! It's a completely normal part of development.
