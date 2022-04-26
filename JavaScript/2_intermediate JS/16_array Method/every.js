const numbers = [2,4,5,3,7];
const ans=numbers.every((number)=>number%2===0);
console.log(ans) //returns true if every element in number is even.


const cart = [
    {productID:1, productName:'mobile', price:4500},
    {productID:2, productName:'laptop', price:20000},
    {productID:3, productName:'tv', price:18000},
]
//check every product price<25000
const answer = cart.every((cartItem)=>cartItem.price <25000);
console.log(answer);