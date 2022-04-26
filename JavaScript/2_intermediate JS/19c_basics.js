const obj = {
    key1: 'value1',
    key2: 'value2'
}
const obj2= Object.create(obj);  //another way to create empty object
obj.key3 = 'value3';
console.log(obj2.key1)

