'use strict'
// function myfibonacciFunction(sum) {

//     let a = 1;
//     b = 1;
//     for (let i = 3; i <= sum; i++) {
//         [a, b] = [b, a + b];
//     }
//     return b;
// }

// console.log(myfibonacciFunction(10));

// myfibonacci();

// function myfibonacci() {
//     console.log('Old desc');
// }
// myfibonacci2();
// const myfibonacci2 = function () {
//     console.log('Held desc');
// }

// const myfibonacci3 = () => {
//     console.log('Hi, Lambda Expression');
// }

// myfibonacci3();

// var x = '3';

// function printX() {
//     console.log(x);

//     var x = '5';
//     console.log(x);
// }

// printX();



// function printX() {
//     console.log(x);
//     let x = '5';

// }

// printX();
// let x = '3';

// function myFibonacciFunction() {
//     let x = 0;
//     let y = 1;
//     let z = 0;

//     return function getNext() {
//         [z, x, y] = [x, y, x + y];
//         return z;
//     };
// }

// const fibonacci = myFibonacciFunction();

// for (let i = 0; i < 5; i++) {
//     console.log(fibonacci());
// }

// let func;


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         func = function () {
//             console.log(i);
//         }
//     }
// }

// console.log(i);
// func();

// const button = document.getElementById('button');

// const someVariable = 'Привет, мир!';

// button.addEventListener('click', () => {
//     console.log(someVariable);
// });

// function myFirstFib() {
//     let i = 10;

//     return function () {
//         console.log(i);
//     }
// }

// console.log(i);
// // const func = myFirstFib();
// myFirstFib();

let func;

if (true) {
    let i = 10;

    func = function () {
        console.log(i);
    }
}

console.log(i);




