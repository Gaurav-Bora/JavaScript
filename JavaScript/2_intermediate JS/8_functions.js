// function sing() {
//     console.log('happy birthday to you........');
// }
// sing();

// function add(x,y) {
//     console.log(x+y);
// }
// add(78,98);

// function even(x) {
//     if (x%2===0) {
//         return true;
//     } else {
//         return false;
//     }
    
// }
// console.log(even(45));

function findTarget(array,target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }        
    }
    return -1;
}

const myArray=[1,2,3,5];
const ans= findTarget(myArray,3);
console.log(ans);