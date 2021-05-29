const number = [1, 2, 3, 4];

const output = move(number, 1, 4);

console.log(output);


function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.lenght || position < 0) {
        console.error('invalid offset');
        return;
    }

    const output = [...array];
    // To move and element first we have to remote it
    // And then put it back in the right index 
    const element = output.splice(index, 1)[0]; // [0] access the element stored inside the new array spliced
    output.splice(position, 0, element); //index (original + where we want the number to move and finally the number)
    return output;
}