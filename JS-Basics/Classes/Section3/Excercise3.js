// If Number Divisible by 3 = Fizz
// Divisible by 5 = Buzz
// Divisible by both FizzBuzz
// If not, same number
// If not number message

function fizzBuzz(input) {
    if (typeof input !== 'number') return console.log("NaN");
    else if ((input % 5 == 0) && (input % 3 == 0)) return console.log('FizzBuzz');
    else if (input % 3 == 0) return console.log('Fizz');
    else if (input % 5 == 0) return console.log('Buzz');

    return console.log(input);
}

const input = fizzBuzz(14);