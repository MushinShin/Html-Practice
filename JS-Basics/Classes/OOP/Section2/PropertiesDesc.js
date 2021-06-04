//  Properties Descriptors

let person = { name: 'mosh' };

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: false
});

person.name = 'john';

console.log(person);