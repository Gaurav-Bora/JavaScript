//function inside object
// const person = {
//     firstName: 'gaurav',
//     age: 24,
//     about : function(){
//         console.log(`persons name is ${this.firstName} and age is ${this.age}.`)
//     }
// }
// person.about();

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: 'gaurav',
    age: 24,
    about: personInfo
}

const person2 = {
    firstName: 'saurav',
    age: 25,
    about: personInfo
}
const person3 = {
    firstName: 'zaurav',
    age: 28,
    about: personInfo
}

person1.about();
person2.about();
person3.about();