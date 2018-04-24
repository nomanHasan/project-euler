const isPrime = x => {
    if (x === 2 || x === 3) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};

const divisible = (x, y) => (x % y === 0 ? true : false);

const primeFactors = x => {
    let f = 2;
    primeRange(f, x).forEach(e => {
        if (x % e === 0) {
            console.log(e);
        }
    }
    return factors;
};

const printResult = number => {
    console.log(`Prime factors of ${number} : ${primeFactors(number)}`);
    console.log(`Max Prime factor - ${Math.max(...primeFactors(number))}`);
}

printResult(600851475143);
