//clone array

let array1 = ['item1','item2'];
// let array2 = array1.slice(0);
// let array2 =[].concat(array1);

// let array2 = [...array1];        //spread operator
let array2 = array1.slice(0).concat('item3','item4');
console.log(array2);



