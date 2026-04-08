function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    };
}

var author = new User('Huy', 'Nguyen');
console.log(author.getName()); // "Huy Nguyen"
console.log(author);