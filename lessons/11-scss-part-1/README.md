# Sass: Part I

##### Variables

Variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the \$ symbol to make something a variable.

```
$font-main: Helvetica, sans-serif;
$primary-color: #f0f;
$secondary-color: #ff0;

/* Usage: */
.title {
  font: $font-main;
  color: $primary-color;
}
```

##### Nested rules

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy.

```
.article {
    background-color: green;

    .title {
        font-size: 2em;

        span {
            color: red;
        }
    }
}

/* It will compile to: */
.article {
    background-color: green;
}
.article .title {
    font-size: 2em;
}
.article .title span {
    color: red;
}
```

###### Reference symbol ( & )

Sass uses reference symbol to concatenate to properties.
It can be classes, id, tag, state property (:hover, :focus, etc) etc.

```
.article {
    background-color: green;

    &:hover {
        background-color: yellow;
    }
}
```

##### Math Operators(+, -, /, \*)

CSS has `calc` which gives you ability to use math, but with scss syntax is just more familiar.

```
/* Addition */
p {
    font-size: 10px + 4px;
}

/* Subtraction */
p {
    font-size: 10px - 4px;
}

/* Multiplication */
p {
    font-size: 10px * 3;
}

/* Division */
p {
    font-size: 10px / 2;
}
```

And even remainder:

```
@function rainbow($position) {
    @if ($position % 3 === 1) {
        @return green
    }
    @else {
         @return red
    }
}

.article {
  font-size: double(14px);
}
```

##### Functions

As in any programming language, scss gives you ability to write your functions to style elements.

```
@function double($variable) {
 @return $variable * 2;
}

.article {
  font-size: double(14px);
}
```

##### Mixins

You can avoid repeating yourself with vendor coverage and prefixes. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for transform.

```
@mixin justifyContent($value){
    -webkit-box-pack: $value;
    -ms-flex-pack: $value;
    justify-content: $value;
}

.container {
    @include justifyContent(space-between)
}
```

#### Exercises:
1. Create a scss file `theme` and declare the next variables:
- color-primary;
- color-secondary;
- font-size-title;
- font-size-subtitle;
- font-size-text;
2. Style each type of elements inside `.main` with nesting.
3. Add hover stylings to third `li` from `.main` with nesting and `&`.
4. Create a function `setEms` which takes number as an argument and multiply by 14px;
5. Create a scss file `mixins` and create a mixin `container` with some default stylings.
7. Create some markup to test all your created styles.
