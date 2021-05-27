// Combining and Slicing Arrays
const first = [{ id: 2, }];
const second = [4, 5, 6];

// Concat ---------------------------
const combined = first.concat(second);
console.log(combined);

// Slice ------------------------- in two parts
const slice = combined.slice(2, 4);
console.log(slice);

//If the are reference type are copy by it
//If they are value types are copy by it