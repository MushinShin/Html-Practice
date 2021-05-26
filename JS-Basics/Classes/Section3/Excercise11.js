// prime (1 and intself)
// Nested Loop probably can be put in another function (logic)
function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isFactor(number)) console.log(number);
}


function isFactor(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

showPrimes(20);
