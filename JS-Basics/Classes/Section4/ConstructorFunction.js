// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw');
    }
}

const circle = new Circle(1); //Creates empty obj - point obj - return obj//
