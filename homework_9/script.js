'use strict'

function makeFibonacciFunction() {
    let a = 0;
    let b = 1;
    return () => {
        let f = a;
        a = b;
        b = f + a;
        return b;
    }
}

const fibonacci = makeFibonacciFunction();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());