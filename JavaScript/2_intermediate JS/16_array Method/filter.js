const numbers = [1, 3, 4, 5, 6, 7];

// const isEven = function (number) {
//     return number % 2 == 0;
// };

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers)

const EvenNum = numbers.filter((number)=>{
    return number%2==0
});
console.log(EvenNum)