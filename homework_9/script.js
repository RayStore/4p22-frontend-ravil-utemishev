'use strict'

function makeFibonacciFunction() {
    // область видимости функции makeFibonacciFunction()
    let calc = 0;

    function helper() {
        // область видимости функции helper()
        console.log(calc)
    }
    return helper

    function helper() {
        // область видимости функции helper()
        console.log(calc++)
    }
}
const fibonacci = makeFibonacciFunction()
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();