
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// ------ Returns the value 'a' ---------- //
const course = courses.find(course => course.name === 'a');
// --------------  Course goes to course.name === 'a' -----//

console.log(course);