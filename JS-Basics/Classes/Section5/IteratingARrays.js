// Iterating an Array
const numbers = [1, 2, 3];


// Approach 1
for (let number of numbers) {
    console.log(number);
}


// Approach 2
numbers.forEach((number, index) => console.log(index, number));