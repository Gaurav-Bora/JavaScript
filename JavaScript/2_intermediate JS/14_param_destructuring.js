const person = {
    Fname: 'Gaurav',
    gender: 'M'
}
// function printDetails(obj) {
//     console.log(obj.Fname);
//     console.log(obj.gender)
// }

function printDetails({Fname,gender}) {
    console.log(Fname);
    console.log(gender)
}
printDetails(person);