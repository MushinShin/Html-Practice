function Circle(radius) {
    // Intance members
    this.radius = radius;

    this.move = function () {
        this.draw();
        console.log('move');
    }

}

// Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
}

const circle = new Circle(1);
const circle2 = new Circle(1);

Circle.prototype.toString = function () {
    return 'Circle with Radius' + this.radius;
}