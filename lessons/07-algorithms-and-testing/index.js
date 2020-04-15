const testArray = [5, 28, 19, 21, 4, 6];
const maxDiff = array => {
    let currentLargestDiff = 0;

    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        for (let j = 0; j < array.length; j++) {
            const otherNumber = array[j];
            if (i !== j) {
                if (number - otherNumber > currentLargestDiff) {
                    currentLargestDiff = number - otherNumber
                }
            }
        }
    }

	return currentLargestDiff;
}
// console.log(maxDiff(testArray));














const bennysMaxDiff = array => {
    // find lowest number
    let lowestNumber = array[0];
    // find highest number
    let highestNumber = array[0];

    for (let index = 0; index < array.length; index++) {
        const number = array[index];

        if (lowestNumber === undefined) {
            lowestNumber = number;
        }
        if (highestNumber === undefined) {
            highestNumber = number;
        }
        if (index === 0) {
            lowestNumber = number;
            highestNumber = number;
        }

        if (lowestNumber > number) {
            lowestNumber = number;
        }

        if (highestNumber < number) {
            highestNumber = number;
        }
    }

    // console.log(highestNumber, lowestNumber)

    return highestNumber - lowestNumber;
}

// console.log(bennysMaxDiff(testArray))

const hollysMaxDiff = array => {
    const sortedArray = [...array].sort((a, b) => a - b);
    const smallest = sortedArray[0]
    const largest = sortedArray[sortedArray.length - 1]

    return largest - smallest
}

// console.log(hollysMaxDiff(testArray))













const maxAdjacentDiff = array => {
    let currentLargestDiff = 0;
    
    for (let index = 1; index < array.length; index++) {
        const number = array[index];
        const prevNumber = array[index - 1];
        const difference = Math.abs(number - prevNumber);
        
        if (difference > currentLargestDiff) {
            currentLargestDiff = difference;
        }
    }
    
    return currentLargestDiff;
}
console.log(maxAdjacentDiff(testArray));
console.log(maxAdjacentDiff([5, 28, 19, 29, 1, 6]));


const patricksMaxAdjacentDiff = array => {
    let difference;
    let maxDifference = 0;

    for (let index = 0; index < array.length; index++) {
        difference = array[index - 1] - array[index]

        if (difference > maxDifference) {
            maxDifference = difference
        }
    }

    return maxDifference;
}

// console.log(patricksMaxAdjacentDiff(testArray))
// console.log(patricksMaxAdjacentDiff([5, 28, 19, 29, 1, 6]))

const bennysMaxAdjacentDiff = array => {
    let difference;
    let maxDifference = 0;

    for (let index = 0; index < array.length - 1; index++) {
        if (array[index + 1] > array[index]) {
            difference = array[index + 1] - array[index]
        } else {
            difference = array[index] - array[index + 1]
        }

        if (difference > maxDifference) {
            maxDifference = difference
        }
    }

    return maxDifference;
}

// console.log(bennysMaxAdjacentDiff(testArray))
// console.log(bennysMaxAdjacentDiff([5, 28, 19, 29, 1, 6]))

const factorial = number => {
    if (number === 0) return 1;

    let total = number;
    // 5
    while(number > 1) {
        number--;
        total *= number;
    }

    return total
}

// const factorial = number => {
//     let fact = 0;
//     let counter = 0;

//     if (number === 0) {
//         return 1
//     }

//     while(counter < number) {
//         console.log(number * number - 1)
//         fact += number * number - 1
//         counter++
//     }

//     return fact
// }

module.exports = {
    maxDiff: maxDiff,
    maxAdjacentDiff: maxAdjacentDiff,
    factorial: factorial
}