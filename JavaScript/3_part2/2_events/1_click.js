//click add can be done in 3 ways.
// const btn = document.querySelector('.btn-headline');
// console.log(btn);
// console.dir(btn);        
// btn.onclick = function () {          //not to use.
//     console.log('you clicked me!!!...')
// }

//imp
// const btn = document.querySelector('.btn-headline');
// function clickMe() {
//     console.log('you clicked...');
// }
// btn.addEventListener('click',clickMe);  //eventType,action

//OR
// const btn = document.querySelector('.btn-headline');
// btn.addEventListener('click',function () {
//     console.log('thsnx for clicking...');
// })

// using arrow function
const btn = document.querySelector('.btn-headline');
btn.addEventListener('click',()=>{
    console.log('arrow function click..')
})