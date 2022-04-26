const link = document.querySelector('a');
console.log(link.getAttribute('href'));                 //get Attribute
link.setAttribute('href','https://codprog.com');        //set Attribute
console.log(link.getAttribute('href'));

const inputElement=document.querySelector('.form-todo input');
console.log(inputElement.getAttribute('type'));