const movie = {
    tile: 'a',
    release: 2018,
    rating: 4.5,
    director: 'b'
}

function showProperties(obj) {
    for (let key in movie)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);


}

showProperties(movie);