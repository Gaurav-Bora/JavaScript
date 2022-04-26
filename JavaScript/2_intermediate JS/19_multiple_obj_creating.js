function createUser(firstName,lastName,email,age) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.about=function () {
        return `${firstName} is ${age} years old.`
    };
    user.is18 = function () {
        return this.age>= 18;
    }
    return user
}
const user1 = createUser('gaurav','bora','gb@gmail.com',24);
console.log(user1);
const is18=user1.is18();
console.log(is18);
const about=user1.about();
console.log(about);