// Finding elements in reference types
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// --------- Returns the index of the value --------- //
const course = courses.findIndex(function (course) {
    return course.name === 'a';
});

console.log(course);

// ------ Returns the value 'a' ---------- //

// const course = courses.find(function (course) {
//     return course.name === 'a';
// });