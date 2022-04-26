// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// //capture

// child.addEventListener('click', () => {
//     console.log('you clicked on child')
// }, true);
// parent.addEventListener('click', () => {
//     console.log('you clicked on parent')
// }, true)
// grandparent.addEventListener('click', () => {
//     console.log('you clicked on grandparent')
// }, true)


// //not captured
// child.addEventListener('click', () => {
//     console.log('you clicked on child')
// });
// parent.addEventListener('click', () => {
//     console.log('you clicked on parent')
// })
// grandparent.addEventListener('click', () => {
//     console.log('you clicked on grandparent')
// })


//event deligation   (seperatr code)

const grandparent = document.querySelector('.grandparent');

grandparent.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
})