const numbers = [1, 2, 3, 4, 1, 1, 1];

function except(array, excluded) {
    let output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

const output = except(numbers, [1]);

console.log(output);