// const firstButton= document.querySelector('#one');
// firstButton.addEventListener('click',function () {
//     console.log('you clicked first button.')
// })

const allButton = document.querySelectorAll('button');
console.log(allButton);

// //for of
// for (const button of allButton) {
//     button.addEventListener('click',function () {
//         console.log(this)
//     })
// }

// //for
// for (let i = 0; i < allButton.length; i++) {
//     allButton[i].addEventListener('click',function () {
//         console.log(this);
//     });
// }

//for each
allButton.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(this)
    })
}

);