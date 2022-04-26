//proto - is a refrence of the chain created.
//prototype -is a object.


function createUser(firstName, lastName, email, age) {
    const user = Object.create(createUser.prototype);     //create bond and empty object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    
    return user
}
createUser.prototype.about= function () {
    return `${this.firstName} is ${this.age} years old.`
}
createUser.prototype.is18= function () {
    return this.age >= 18;
}
createUser.prototype.sing= function () {
    return 'oo laaa laa';
}

const user1 = createUser('gaurav', 'bora', 'gb@gmail.com', 24);
const user2 = createUser('saurav', 'bora', 'gb@gmail.com', 24);
const user3 = createUser('zaurav', 'bora', 'gb@gmail.com', 24);

console.log(user1.is18());
console.log(user3.about());
console.log(user1.sing());