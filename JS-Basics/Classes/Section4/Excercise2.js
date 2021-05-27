//Initialize a function first using factory function and then constructor

//------ Factory Function ------//

const address = createAddress('Third Street', 'The Silver', '1200');

console.log(address);

function createAddress(Street, City, zipCode) {
    return {
        Street,
        City,
        zipCode
    };
}



//------ Constructor Function ------//

let address = new Address('a', 'b', 'c')

console.log(address);

function Address(Street, City, zipCode) {
    this.Street = Street;
    this.City = City;
    this.zipCode = zipCode;
}
