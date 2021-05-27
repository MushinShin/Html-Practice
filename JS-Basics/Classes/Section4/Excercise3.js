// Create two address object

//------ Constructor Function ------//

let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')
let address3 = new Address('a', 'b', 'c')

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));


function Address(Street, City, zipCode) {
    this.Street = Street;
    this.City = City;
    this.zipCode = zipCode;
}

function areEqual(address1, address2) {
    // Check if are equal //
    return address1.Street === address2.Street &&
        address1.City === address2.City &&
        address1.zipCode === address2.zipCode;

}

function areSame(address1, address2) {
    // If address 1 and 2 point to the same Object //
    return address1 === address2;
}