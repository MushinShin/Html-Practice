// Address Object street city zipCode
// Function showAddress(address)

const address = {
    Street: 'Third Street',
    City: 'The Silver',
    zipCode: '1200'
};

function showAddress(address) {
    for (let key in address)             //Best way to Enumerate
        console.log(key, address[key]);
}

showAddress(address);