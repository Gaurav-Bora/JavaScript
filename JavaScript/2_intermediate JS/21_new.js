function createUser(firstName, lastName, email, age) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    
   
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

const user1 =new createUser('gaurav', 'bora', 'gb@gmail.com', 24);
const user2 =new createUser('saurav', 'bora', 'gb@gmail.com', 24);
const user3 =new createUser('zaurav', 'bora', 'gb@gmail.com', 24);

console.log(user1.is18());
console.log(user3.about());
console.log(user1.sing());