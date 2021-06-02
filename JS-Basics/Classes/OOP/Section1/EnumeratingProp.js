// Enumerating Properties 
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Enumerate all members for in
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

// all the key 
const keys = Object.keys(circle);
console.log(keys);


// check for existing of ONE
if ('radius' in circle)
    console.log('circle has a radius');