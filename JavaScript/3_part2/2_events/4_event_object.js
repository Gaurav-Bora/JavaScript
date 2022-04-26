// const firstButton = document.querySelector('#one');
// firstButton.addEventListener('click',function () {
//     console.log(this)
// })

const allButtons = document.querySelectorAll('.my-buttons button');
// console.log(allButtons);

allButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.currentTarget.textContent);
    })
})