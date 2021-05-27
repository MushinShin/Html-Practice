// Sorting Arrays
const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

// Invert
numbers.reverse();
console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

// Case Sensitivity
courses.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

    // a < b = -1
    // a > b = 1
    // a === b = 0
});

console.log(courses);