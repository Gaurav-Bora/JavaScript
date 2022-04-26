const userMethod = {
    about: function () {
        return `${this.firstName} is ${this.age} years old.`
    },
    is18: function () {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, email, age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user
}
const user1 = createUser('gaurav', 'bora', 'gb@gmail.com', 24);
const user2 = createUser('saurav', 'bora', 'gb@gmail.com', 24);
const user3 = createUser('zaurav', 'bora', 'gb@gmail.com', 24);

console.log(user1.is18());
console.log(user3.about())
