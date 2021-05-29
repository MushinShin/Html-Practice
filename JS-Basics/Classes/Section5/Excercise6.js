// Anytime have a array of value and want get 1. Use Reduce!!!
const numbers = [1, 2, 3, 5];

const max = getMax(numbers);
console.log(max);

function getMax(array) {
    let maxNum = -1;
    if (array.lenght === 0) return undefined;
    // for (let number of array) {
    //     if (maxNum < number)
    //         maxNum = number;
    // }
    // return maxNum;

    return array.reduce((accumulator, current) => {
        accumulator = (current > maxNum) ? accumulator = current : 0;
        return accumulator;
    })

    // MOSH SOLUTION
    // array.reduce((a, b) => (a > b) ? a : b);
}