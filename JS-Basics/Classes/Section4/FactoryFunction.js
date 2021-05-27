
// Factory Function
//Define logic in 1 place 
//Call function with diferent values but there
//  is a single place to modify


function createCircle(radius) {
    return {
        radius
    };
}


const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);