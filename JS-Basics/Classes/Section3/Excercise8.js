// Multiples of 3: 3 6 9
// Multiples of 5: 5 10


function sum(limit) {
    let total = 0;

    for (let i = 1; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) total += i;

    }

    return total;
}

const limit = sum(10);
console.log(limit);