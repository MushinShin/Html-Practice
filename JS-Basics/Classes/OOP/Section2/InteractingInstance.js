function Circle(radius) {
    // Intance members
    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log('move');
    }

}

const c1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}


// Returns Instance Members
console.log(Object.keys(c1));

// Returns all members (instance and prototype)
for (let key in c1) console.log(key);