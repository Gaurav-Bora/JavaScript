let fruits= ['apple','grapes','banana','mango'];
console.log(fruits);
console.log(fruits[2]);

//changing values in fruit
fruits[1] = 'watermelon';
console.log(fruits);

//array methods

//adding in array
fruits.push('grapes');
console.log(fruits);
//pop - removing from array
let popedFruit = fruits.pop();
console.log(popedFruit);

//unshift- adding at start of  array
fruits.unshift('strawBerry');
console.log(fruits);  