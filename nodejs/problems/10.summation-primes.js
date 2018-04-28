const { isPrime, rangePrime } = require("./lib/prime");


console.log(rangePrime(1, 2000).reduce((accm, obj) => accm + obj, 0));


// 2000000 142913828922