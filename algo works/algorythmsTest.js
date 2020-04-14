const testArray = [5, 28, 19, 21, 4, 6];

const maxDiff = array => {
    temp = 0
    let lowestNum = 0;
    let highestNum = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        temp = element;
        if (element < element) {
            lowestNum = element;
        }
    }
    return result;
}
console.log(maxDiff(testArray));