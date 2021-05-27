// Cloning an Object
const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};


//-------------------------------------//
// const another = {};

// (OLD) for (let key in circle)
//     another[key] = circle[key];

// another['radius'] = circle['radius'];
//------------------------------------//

//--------------------------------------//
// const another = Object.assign({}, circle); //Copy from 1 or more
//Copies the properties inside the brackets //COmbaning 1 or more
//--------------------------------------//

// Spread the Object //
const another = { ...circle };
//getting all his methods and puting them in other Object

console.log(another);