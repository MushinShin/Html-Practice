// Emptying an Array
let numbers = [1, 2, 3, 4];

// Solution 1 //if not have any other reference to original
numbers = [];

// Solution 2 //Cuts the original array //Moshito best
numbers.length = 0;

// Solution 3
numbers.splice(0, numbers.length);

// Solution 4
while (numbers.length > 0)
    numbers.pop()
