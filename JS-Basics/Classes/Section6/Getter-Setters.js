const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = "john smite"
console.log(person.fullName);

// Getter => to acces properties
// Setter => change (mutate) them