// Landscape width > height
//otherwise Portrait


function isLandscape(width, height) {
    return (width > height);

    // return (width > height) ? 'Landscape' : 'Portrait';
}

console.log(isLandscape(100, 150));