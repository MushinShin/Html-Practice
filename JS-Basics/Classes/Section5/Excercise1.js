// Array from Range

function arrayFromRange(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array.push(i);
    }
    return array;
}

const numbers = arrayFromRange(-10, -4);
console.log(numbers);