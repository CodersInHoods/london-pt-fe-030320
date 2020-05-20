# Sass: Part II

##### Conditionals

Sass has ability to write your styles with conditions. (@if @else)

```
@mixin setGap($size) {
  @if $isGap == small {
    margin: 20px;
  }
  @else if $size == medium {
    margin: 40px;
  } @else {
      margin: 60px;
  }
}

.article {
  @include setGap(small);
}
```

##### Loops

As in any programming language, scss gives us ability to use loops, such as `for`, `each` and `while` to generate css.

###### @for

The @for directive allows you to have `x` amount of iterations.

```
@for $i from 1 through 5 {
  .#item-#{$i} {
    width: 20px + $i
  }
}
```

###### @each

With `@each` you can apply particular logic to a list of things.

```
$list: banner sidebar footer

  @each $element in $list {
    .#{$element} {
      padding: 2em
    }
  }
```

###### @while

The @while directive takes an expression and emits the nested block of styles until the statement evaluates to false. Much like the @for control directive, you can create complex looping statements "while" a specific condition evaluates to true.

```
$items: 10
$item-width: 10px;

@while $items > 0 {
  .item-#{$items} {
    width: $items-width + ($items * 5)
  }
  $items: $items - 1
}
```

###### Interpolation

Interpolation can be used to inject into unquoted strings. This is particularly useful when dynamically generating names (for example for animations), or when using slash-separated values. Note that interpolation in SassScript always returns an unquoted string.

```
@function example($className) {
    .#{$className} {
        color: red;
    }
}
```

###### @import

Sass extends CSS's `@import` rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation.

```
@import './mixins.scss'

.main {
    @include myMixin;
}
```

###### Checking If Parent Exists

The `&` symbol will select the parent element, if it exists. Or return null otherwise. Therefore, it can be used in combination with an `@if` directive.

```
@mixin styleParent {
    @if & {
        &:hover {
            color: green;
        }
    }
}
```

##### Exercises:

1. create a function which takes argument(`small`, `medium`, `large`) and return font size `14px`, `18px` and `24px` respectfully.
2. create
