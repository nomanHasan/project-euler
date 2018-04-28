const R = require('ramda');


const isPrime = x => {
    if (x === 2 || x === 3) {
        return true;
    }
    if (x === 1) {
        return false;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};


const rangePrime = (from, to) => R.range(from, to).filter(isPrime);


module.exports = {
    isPrime,
    rangePrime
}