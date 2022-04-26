const user1 = {
    firstName: 'gaurav',
    age: 24,
    about: function (hobby,favMusic) {
        console.log(this.firstName, this.age,hobby,favMusic);
    }
}

const user2 = {
    firstName: 'saurav',
    age: 25,
    
    
}
user1.about.call(user2,'guitar','arijit');