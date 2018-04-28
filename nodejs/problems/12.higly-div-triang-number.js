const R = require('ramda');

const divisors = (number) => 
    R.range(1, number).filter(e => number % e === 0);



function main() {

    i = 1, n =2;

    while(true) {
        console.log(i);
        n++;
        i = R.range(1, n).reduce((accm, obj)=> accm + obj, 0);

        if (divisors(i).length > 500) {
            break;
        }
    }

}



console.log(divisors(100).length)


main();