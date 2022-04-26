//start, delete, insert

const myArray =  ['item1','item2','item3'];

//delete
// myArray.splice(1,1);  //index, no. of item to delete
// console.log(myArray);

// insert
myArray.splice(1,0,'inserted');      //index, no. of item to delete, insert
console.log(myArray);