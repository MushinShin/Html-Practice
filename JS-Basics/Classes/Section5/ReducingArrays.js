// Reducing an Array.

const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

// callback function ((accumulator, currenvalue is 1), 0 is the other)

console.log(sum);