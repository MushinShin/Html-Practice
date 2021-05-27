// Testing elements

const numbers = [1, 2, 3];

// Every() check every elements matches
const atLeastOnePositive = numbers.every(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// Some() check if 1 elements matches
const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive);