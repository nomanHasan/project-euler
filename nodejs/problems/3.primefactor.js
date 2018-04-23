const fs = require('fs');
const {range} = require('../lib/range');


const isPrime = x => {
    for (let i = 2; i< x; i ++) {
        if (x %i === 0) {
            return false;
        }
    }
    return true;
}

const primeRange = (from, to) => range(from, to).filter(isPrime);


const primeFactors = x => {
    let f = 2;
    primeRange(f, x).forEach(e => {
        if (x % e === 0) {
            console.log(e);
        }
    })
}

const number = 600851475143;
// primeFactors(number);

fs.writeFileSync('Prime_Number.txt', 
primeRange(2, 1000));
