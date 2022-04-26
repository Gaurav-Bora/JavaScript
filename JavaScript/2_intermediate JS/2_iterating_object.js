const person = {myName:'Gaurav',
age:24,
hobbies:['cricket','eating','singing']};

//iterating using forIn loop.

for (const key in person) {
    console.log(`${key} : ${person[key]}`)
}
