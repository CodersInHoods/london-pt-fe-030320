array = [5, 28, 19, 29, 1, 6]

const maxAdjacentDiff = array => {
    let biggestDif = 0;
    let currentDif;
    for (let i = 0; i < array.length; i++) {
        const number = array[i];

        if (number > array[i + 1]) {
            currentDif = number - array[i + 1];
        } else {
            currentDif = array[i + 1] - number;
        }
        if (currentDif > biggestDif) {
            biggestDif = currentDif;
        }
    }
    console.log(biggestDif);
    return biggestDif;
}

console.log(maxAdjacentDiff(array));