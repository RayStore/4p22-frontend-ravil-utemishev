function myFibonacciFunc() {
    let a = 0;
    let b = 1;
    return {
        next: () => {
            let f = a;
            a = b;
            b = f + a;
            return { value: f, done: false };
        }
    }
}

const fibonacci = myFibonacciFunc();

fibonacci();






