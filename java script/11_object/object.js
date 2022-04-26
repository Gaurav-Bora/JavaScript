let person = {
    firstName: 'gaurav',
    lastName: 'bora'
};

console.log(person.firstName);
console.log(person['lastName']);

person.firstName = 'gau';
console.log(person.firstName); //modifing properties

person.age = 24;
console.log(person);  //adding properties

delete person.lastName;
console.log(person);

console.log('height' in person);

for (const key in person) {
    console.log(key + ':' + person[key]);
}
//this
let person1 = {
    firstName: 'gaurav',
    lastName: 'bora',
    sayHello() {
        console.log('hello !  i am ' + this.firstName + ' i have a  ' + car.brand + ' car');
    }

};

let car = {
    brand: 'tata',
    model: 'safari'
}
person1.sayHello();

// maths object
console.log(Math.PI)
console.log(Math.E)


let x = Math.round(4.7);
console.log(x);
let y = Math.ceil(4.7);
console.log(y);

//Random number generator
let z = Math.floor(Math.random() * 10);
console.log(z);

let a = Math.floor(Math.random() * (25 - 15)) + 15;  //random no between 15 - 25
console.log(a);

function getRandom(min, max) {
    let b = Math.floor(Math.random() * (max - min)) + min;  //random no between 15 - 25
    return b;
}
console.log(getRandom(10, 20));

//Date time object
let p = new Date();
console.log(p);

let r = new Date(2022, 11, 13, 12, 12);
console.log(r);

//New in object
var person4 = new Object();
person4.name = "Gaurav";
person4.age = 25;
console.log(person4);

//getter and setter


var person2 = {
    name : 'gaurav',
    age : 25,

    get getname(){
        return this.name.toUpperCase();
    }
    



};
console.log(person2.getname);