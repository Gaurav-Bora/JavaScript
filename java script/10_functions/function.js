

function Multable(a) {
    for (let i = 1; i <= 10 ; i++) {
        document.write(`${a} x ${i} = ${a*i}`);
        document.write('<br>');
            
    }
}
Multable(8);

function add(a,b) {
    document.write(a+b)
}
add(5,4);

function argadd(params) {
    if (arguments.length ==0) {
        console.log('no arguments passed.');
    } else {
        sum = 0
        for (let i = 0; i < arguments.length; i++) {
            sum = sum + arguments[i] ;
            
        }
        console.log(sum);
    }
    
}
argadd(8,9,5,4)