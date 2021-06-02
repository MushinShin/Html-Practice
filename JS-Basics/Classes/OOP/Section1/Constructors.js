// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);


// Constructor Function
function Circle(radius) {
    console.log('this,', this);
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

// New does 3 things => 1.- Create an Empty Object => This to point
// to that Object and => finally will return that object.