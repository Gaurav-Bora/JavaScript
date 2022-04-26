const number = [4,5,7,2];
function multiplyBy2(num,index) {
    // console.log('index is', index);
    console.log(`index is ${index} and ${num} * 2 = ${num*2}`);
}

// for (let i = 0; i < number.length; i++) {
//     multiplyBy2(number[i],i);
    
// }

//forEach
number.forEach(multiplyBy2);

//example
const user = [
    {Fname: 'Gaurav', age: 24},
    {Fname: 'bora', age: 25},
    {Fname: 'gau', age: 26},
]
user.forEach(function (user) {
    console.log(user.Fname)
})
