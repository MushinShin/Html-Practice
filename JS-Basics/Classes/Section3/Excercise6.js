// Counts trhuty values
// const name = 'hola'; //Trhuty value
// const name = ''; //falsy value

// Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN

const array = [0, null, '', 1, 3, 4, 5];
const size = array.length;
let truty = 0;

function countTruhty(array) {
    for (let value of array) {
        if (value)
            truty++;
    }
    return console.log(truty);
}

(countTruhty(array));