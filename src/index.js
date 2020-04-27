'use strict'

const fibonacci = () => {

    let fib = [0, 1];
    
    for(let i=fib.length; i<15; i++) {
        fib[i]= fib[i-2] + fib[i-1];
    }
    return fib; 
}

const isFibonnaci = (num) => fibonacci().includes(num);


module.exports = {
    fibonacci,
    isFibonnaci
}
