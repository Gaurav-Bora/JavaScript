function Student(first, second, age, cls) {
    this.firstName = first;
    this.lastname = second;
    this.age = age;
    this.cls = cls;

}


var Student1 = new Student('gaurav', 'Bora', 25, 6);
console.log(Student1);
Student1.nationality = 'indian';
Student1.name = function () {
    return this.firstName + ' ' + this.lastname ; 
}

console.log(Student1.name());

var user = {
    id: '101',
    mail : 'gauravbora311@gmail.com',
    personal_info:{
        name:'gaurav',
        address:{
            street:'121',
            city:'chiplun',
            country : 'india',
        }
    }
};
console.log(user);