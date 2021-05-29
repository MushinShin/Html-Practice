const numbers = [1, 2, 3, 4];

function includes(Array, searchElement) {
    for (let element of Array)
        if (searchElement === element)
            return true;
    return false;
}

console.log(includes(numbers, 6));
