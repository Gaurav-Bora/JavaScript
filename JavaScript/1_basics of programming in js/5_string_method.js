let fname = ' Gaurav ';
console.log(fname.length);

let newName = fname.trim(); //to remove spaces from start and end.
console.log(newName);
console.log(newName.length);

//UPPERCASE , lowercase
newName = newName.toUpperCase();
console.log(newName);

//Slice
let newString = fname.slice(0,4);
console.log(newString);