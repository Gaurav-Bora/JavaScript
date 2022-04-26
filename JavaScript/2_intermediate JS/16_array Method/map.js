const numbers = [1,2,3,4,5,6];
const square = function (number,i) {
    return `index is ${i},and square is ${number * number}`;
}
const squaresNum =numbers.map(square);
console.log(squaresNum);




const users = [
    {Fname: 'Gaurav', age: 24},
    {Fname: 'bora', age: 25},
    {Fname: 'gau', age: 26},
]
const userName= users.map((user)=>{
    return user.Fname;
});
console.log(userName)
