function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

// Intermidiate Function Inheritance
function extend(Child, Parent) { //Inheritance the methods of the parent class
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);

    this.radius = radius;
}

extend(Circle, Shape); //(parent class Shape "passes" method to child class Circle (duplicate))

Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);
