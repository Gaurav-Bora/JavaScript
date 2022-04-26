//spread operator
//for array
const arr1 = [1,2,3];
const arr2 =[4,5,6];
const newArr = [...arr1,...arr2, 7, 8, 9];
console.log(newArr);

const newarra = [...'123456789']
console.log(newarra);

const obj = {
    key1: 'value1',
    key2: 'value2'
}
const obj2 ={
    key3: 'value3',
    key4: 'value4'
}
const newobj = {...obj,...obj2}
console.log(newobj);

const alphabet = {
    ...'abcdefghijklmnopqrstuvwxyz'
}
console.log(alphabet);

