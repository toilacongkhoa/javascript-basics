function User(firstName, lastName, avater) {
    this.firstName = firstName
    this.lastName = lastName
    this.avater = avater

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8'

var author = new User('Huy', 'Nguyen', 'avater.jpg')
var user = new User('Huy', 'Nguyen', 'avater.jpg')

author.title = 'Developer'
user.comment = 'Hello'

console.log(author)
console.log(user)

