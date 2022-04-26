class createUser {
    constructor(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >= 18;
    }
    sing(){
        return 'oo laaa laa';
    }
}
const user1 =new createUser('gaurav', 'bora', 'gb@gmail.com', 24);
const user2 =new createUser('saurav', 'bora', 'gb@gmail.com', 24);
const user3 =new createUser('zaurav', 'bora', 'gb@gmail.com', 24);

console.log(user1.is18());
console.log(user3.about());
console.log(user1.sing());