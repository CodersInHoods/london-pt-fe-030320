# Functions

A function is a chunk of code which can be **called** again and again to run that chunk of code.

Functions are incredibly powerful. We will introduce them here and we’ll explore them in much greater detail later on. There are 2 ways to define a function, we’ll introduce them by using **function definitions**.

```javascript
function doSomething() {
  // here we write code
  // to define what our
  // function should do
}
```

Functions start with the keyword `function`. Next is the name of the function, in the above example, the name is `doSomething`. Next is a pair of parentheses (we’ll find out more about these later). Lastly, we have an opening `{` and a closing `}` which surround the code that we want to run.

When we want that code to run, we call the function by using the name of the function, followed by a pair of parentheses:

```javascript
doSomething();
```

What things do you do when you arrive home? Turn the lights on, put the heating on, put the kettle on to boil for a cup of tea? Then when you leave you need to turn the lights and the heating off?

```javascript
// get home
lightsOn = true;
heatingOn = true;
thermostatTemp = 21;
kettle = "boiling";

// go out
lightsOn = false;
heatingOn = false;
```

If you do this every time you get home, it would get very repetitive:

```javascript
// get home
lightsOn = true;
heatingOn = true;
thermostatTemp = 21;
kettle = "boiling";

// go out
lightsOn = false;
heatingOn = false;

// get home
lightsOn = true;
heatingOn = true;
thermostatTemp = 21;
kettle = "boiling";

// go out
lightsOn = false;
heatingOn = false;

// get home
lightsOn = true;
heatingOn = true;
thermostatTemp = 21;
kettle = "boiling";

// go out
lightsOn = false;
heatingOn = false;
```

**Developers are lazy**, we don’t want to write anything more than we need to. We’re also pessimists, we just _know_ that the client will change their mind and `thermostatTemp` should actually be set to `20` every time we get home. Now we need to change it in 3 different places.

Functions solve these issues:

```javascript
function getHome() {
  lightsOn = true;
  heatingOn = true;
  thermostatTemp = 21;
  kettle = "boiling";
}

function goOut() {
  lightsOn = false;
  heatingOn = false;
}
```

Now we can call these functions from elsewhere in our code:

```javascript
getHome();

goOut();

getHome();

goOut();

getHome();

goOut();
```
