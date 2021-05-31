// sum(1, 2, 3, 4) => 10
Array.isArray([])


function sum(value) {
    let total = 0;

    if (Array.isArray(value)) {
        for (let values of value) {
            total += values;
        }
        return total;
    }

    for (let values of arguments) {
        total += values;
    }
    return total;
}
console.log(sum([1, 2, 3, 4]));

// Mosh Solution
console.log(sum(1, 2, 3, 4));

function sume(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];
    return items.reduce((a, b) => a + b);
}