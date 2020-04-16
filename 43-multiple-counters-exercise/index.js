const addCounterEl = document.querySelector("#new_timer");
const timersContainerEl = document.querySelector(".timers");

// USE THIS VARIABLE TO COUNT TIMERS
let timersCount = 0;
const timers = [];

addCounterEl.addEventListener(`click`, () => {
    if (timersCount < 5) {
        createTimerEl(timersCount);
    }
});
/**
 * Exercise 1
 *
 * create a function {createTimerEl} which takes a number
 * and creates a div which matches the HTML structure you can find
 * in the README
 *
 * NOTE: each timer should have additional class with unique number(as you
 * can see in example - timer_$)
 */

function createTimerEl(num) { //create timer with number of counter.
    let seconds = 0;
    let miliseconds = 0;

    const stop = () => clearInterval(timers[num]);

    const container = document.createElement("div");
    container.className = `timer timer_${num}`;
    timersContainerEl.append(container);
    const remove = document.createElement("div");
    remove.className = "remove";
    container.appendChild(remove);
    const h3 = document.createElement("h3");
    h3.innerHTML = `${seconds} <span>${miliseconds}</span>`
    container.appendChild(h3);
    const buttons = document.createElement("div");
    buttons.className = "btn";
    container.appendChild(buttons);
    const buttonReset = document.createElement("button");
    buttonReset.className = "reset";
    buttonReset.innerText = "Reset";
    buttons.appendChild(buttonReset);
    const buttonStop = document.createElement("button");
    buttonStop.className = "stop";
    buttonStop.innerText = "Stop";
    buttons.appendChild(buttonStop);
    timersCount++
    timers.push(num);
    const timer = document.querySelector(`.timer_${num} h3`);
    const stopbtn = document.querySelector(`.timer_${num} .stop`);
    const resetbtn = document.querySelector(`.timer_${num} .reset`);
    const removebtn = document.querySelector(`.timer_${num} .remove`);
    console.log(timers);

    function addmili(inter) {
        miliseconds += inter;
        timer.innerHTML = `${seconds}<span>${miliseconds /10 }</span>`
        if (miliseconds === 1000) {
            seconds++;
            miliseconds = 0;
        }
    }

    const reset = () => {
        seconds = 0;
        miliseconds = 0;
        timer.innerHTML = `${seconds}<span>${miliseconds /10 }</span>`;
    }

    timers[num] = setInterval(addmili, 10, 10);

    removebtn.addEventListener("click", event => {
        stop(num);
        event.currentTarget.parentNode.remove();
        for (let index = 0; index < timers.length; index++) {
            const element = timers[index];
            if (element === timers[num]) {
                timers.splice(index, 1);
            }
        }
        timersCount--
    })

    resetbtn.addEventListener("click", reset);

    stopbtn.addEventListener("click", () => {
        stop(num);
    })

    return container;

}