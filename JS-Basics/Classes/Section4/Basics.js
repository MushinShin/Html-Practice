// OOP ------------ //
// function inside of a object is called METHOD //
// let radius = 1;
// let x = 1;
// let y = 1;

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

circle.draw(); //Method