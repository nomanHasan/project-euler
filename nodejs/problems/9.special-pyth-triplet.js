const R = require('ramda');


const square = x => Math.pow(x, 2);

console.log(square(20));

const leftEq = (a, b) => square(a) + square(b)
const sqrt = x => Math.sqrt(x);
const isTriplet = (a, b, c) => sqrt(leftEq(a, b)) === c;

console.log(sqrt(leftEq(3, 4)));
console.log(isTriplet(3,4,5), sqrt(leftEq(3, 4)));

const res = [];

R.range(1, 1000).forEach(a => {
    console.log(a);
    R.range(1, 1000).forEach(b => {
        R.range(1, 1000).forEach(c => {
            if (isTriplet(a, b, c) 
                    && (a < b) && (b < c)
                    && (a + b + c) === 1000) {
                res.push([a, b, c]);
            }
        })
    })
})

console.log(res[0].reduce((accm, obj) => accm * obj, 1));