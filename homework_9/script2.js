'use strict'

const fibonacci = () => {
    let calc = 0;
    let calc2 = 1;

    function helper() {
        let summ = calc + calc2;
        calc = calc2;
        calc2 = summ;
        console.log(calc);
    }
    return helper
};

fibonacci()
fibonacci()
fibonacci()
fibonacci()
fibonacci()



