function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}


function Circle(radius) {
    this.radius = radius;
}

// Reset the Prototype 
Circle.prototype = Object.create(Shape.prototype);
// Reset constructor too
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);