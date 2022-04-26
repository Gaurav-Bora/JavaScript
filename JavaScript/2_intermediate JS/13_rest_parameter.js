function myFun(a,b,...c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myFun(3,4,5,6);

function addAll(...numbers) {   //rest parameter ...
    let total = 0;
    for (const number of numbers) {
        total=total+ number;
    }
    return total;
}
const ans = addAll(3,4,5,6,7,8);
console.log(ans);