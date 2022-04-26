let winningNum = 13;
let userGuess = +prompt('Guess a number: ');
if (userGuess === winningNum) {
    console.log('right guess')
}
else{
    if (userGuess<winningNum) {
        console.log('number is low.')
    }
    else{
        console.log('number is high.')
    }
}