const {fibonacci} = require('../lib/fiboancci');


console.log(
    fibonacci(1, 2, x => x > 4000000)
    .filter(x => x % 2 ===0)
    .reduce((sum, obj) => sum + obj, 0));
