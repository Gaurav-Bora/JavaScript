const numbers = [3,5,8,9];
//is there a single even element 
const ans = numbers.some((number)=>number%2===0);
console.log(ans);


const cart = [
    {productID:1, productName:'mobile', price:4500},
    {productID:2, productName:'laptop', price:20000},
    {productID:3, productName:'tv', price:18000},
    {productID:4, productName:'iphone', price:120000},
]

const answer = cart.some((item) => item.price > 100000);
console.log(answer);