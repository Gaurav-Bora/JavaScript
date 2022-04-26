function myFunc2() {
    console.log('hello inside func2.')
}
function myFunc(callback) {
    console.log('hey there how are you.')
    callback();


}

myFunc(myFunc2);