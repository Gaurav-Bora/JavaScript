const myArray = ['value1','value2','value3','value4','value5'];
// let myVar1 = myArray[0];
// let myVar2 =myArray[1(];

let [myVar1,myVar2,...restVar] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log(restVar);