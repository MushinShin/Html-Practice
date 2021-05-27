// Value VS Reference Types

let x = { value: 10 };
let y = x;
// x and y points to the value: 10
// Primitives are copied by value
// Objects are copied by reference

x.value = 20;


// Another Example
function increase(number) {
    number.value++;
}

//Number inside of the function is independent of the variable number outside.
let number = { value: 10 };

increase(number);
console.log(number);

//Object Functions Array are Reference type