//Display every number between 0 and the input
//determine if it is even or odd

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {

        // if (i % 2 === 0) console.log(i, "EVEN");
        // else
        //     console.log(i, "ODD");

        const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }

}

const limit = showNumbers(10);