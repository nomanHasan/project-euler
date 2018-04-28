const fibonacci = (x, y, stop = x => x > 100, length = 10) => {
    const fib = [x, y];
    while(true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (stop(next)) {
            break;
        }
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

const add = (x, y) => x + y;


module.exports = {
    fibonacci
}