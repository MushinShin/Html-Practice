// Spread Operator ---------------------
const first = [{ id: 2, }];
const second = [4, 5, 6];

// Simplier
const combined = [...first, 'a', ...second, 'b'];

// Copied the combined array of first and second
const copy = [...combined];
