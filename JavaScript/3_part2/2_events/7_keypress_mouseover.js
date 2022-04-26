//keypress event

const body = document.body;
body.addEventListener('keypress',(e)=>{
    console.log(e.key)
})

//mouseover event
const mainButton = document.querySelector('.btn-headline');

mainButton.addEventListener('mouseover',()=>{
    console.log('mouse over event occured')
})

//mouseleave event


mainButton.addEventListener('mouseleave',()=>{
    console.log('mouse leave event occured')
})