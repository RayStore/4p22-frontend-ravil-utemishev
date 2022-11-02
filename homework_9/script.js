'use strict'

function makeFibonacciFunction() {
    // область видимости функции makeFibonacciFunction()
    let calc = 0;
    let calc2 = 1;

    function helper() {
        let result = calc + calc2;
        // область видимости функции helper()
        console.log(calc);
        calc = calc2;
        calc2 = result;
    }

    return helper

}
const fibonacci = makeFibonacciFunction()
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();