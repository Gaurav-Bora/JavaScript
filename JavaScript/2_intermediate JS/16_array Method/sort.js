const numbers = [13,6,554,745,221,465];
numbers.sort((a,b)=>{
    return a-b;     //for decending return b-a
});
console.log(numbers);


const userName = ['gaurav','abha','zimad','vipul'];
userName.sort();
console.log(userName);



//price low to high , price high to low
const product = [
    {productID :1, productName:'pl', price: 300},
    {productID :2, productName:'pl2', price: 3000},
    {productID :3, productName:'pl3', price: 3500},
    {productID :4, productName:'pl4', price: 4300},
    {productID :5, productName:'pl5', price: 1300}
]

// low to high
// product.sort((a,b)=>{
//     return(a.price-b.price)}
// )
// console.log(product)

const low_to_high =product.slice(0).sort((a,b)=>{
    return (a.price-b.price);
});
console.log(product)
console.log(low_to_high);

//high to low
const high_to_low =product.slice(0).sort((a,b)=>{
    return (b.price-a.price);
});
console.log(product)
console.log(high_to_low);
