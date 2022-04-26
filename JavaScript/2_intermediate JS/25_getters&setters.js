class Person{
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName = lastName;
        this.age=age;
    }
    get fullname(){             //getter
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('gaurav','bora',24);
console.log(person1.fullname);








