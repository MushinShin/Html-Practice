// Enumerating Properties of an Object

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

for (let key in circle)           //Best way to Enumerate
    console.log(key, circle[key]);

for (let key of Object.keys(circle)) //Only use in Arrays and Maps (iterables)
    console.log(key);


for (let entry of Object.keys(circle)) //Other way to acces all properties in an object
    console.log(entry);

if ('color' in circle) console.log('yes');