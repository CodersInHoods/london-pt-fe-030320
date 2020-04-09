# Multiple stopwatches

## Demo GIF

![demo gif](./example.gif)

## Deliverables

1. As a user I should be able to add a new timer to the DOM by clicking on "Add Timer".
2. A timer should continuously count up and always show seconds and the first two integers of milliseconds
3. When I click "Reset", that timer should return to 0.
4. When I click "Stop", it should stop that timer.
5. When I click "X", the timer should stop and be removed from the DOM
6. I should be able to add NO MORE than 5 timers.

## How to approach it

There's much less guidance in the README than usual. One approach might be to plan all the functions you think you'll need (more small functions is _probably_ better than fewer big functions!), then write your own descriptions of what they might do. Then figure out how to write the code to achieve what the descriptions say.

Before you start coding, read all the deliverables listed above. Yes, **all** of them!

Once you've started coding, don't move on to the next deliverable until you've completed the one you're currently working on.

After you complete each deliverable, test everything again in the browser. You never know what you might have broken with your new code!

## Timer HTML Structure

```html
<div class="timer timer_1">
  <div class="remove"></div>
  <h3>0 <span>00</span></h3>
  <div class="btn">
    <button class="reset">Reset</button>
    <button class="stop">Stop</button>
  </div>
</div>
```
