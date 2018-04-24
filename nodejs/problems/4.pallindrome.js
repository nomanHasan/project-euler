const R = require('ramda');


const divBy23dN = n =>
    R.range(100, 999)
        .filter(x => R.range(100, 999).includes(n / x))
        .map(x => [x, n / x]);
const isDivisibleBy23dn = n => divBy23dN(n).length > 0;


const isLenEven = s => s.length % 2 === 0;
const toString = x => x.toString();
const toNumber = x => parseInt(x, 10);
const reverseString = x => x.split('').reverse().join('');

const isPalindrome = x => first(x) === reverseString(last(x));

const sliceFirst = s => s.slice(0, s.length / 2);
const first = R.compose(sliceFirst, toString);
const firstReverse = R.compose(toString, first);
const firstNumber = R.compose(toNumber, first);
const firstNumberReverse = R.compose(toNumber, reverseString, first);

const sliceMiddle = s => isLenEven(s) ? undefined : s.slice(s.length / 2, s.length / 2 + 1);
const middle = R.compose(sliceMiddle, toString);

const sliceLast = s => isLenEven(s) ? s.slice(s.length / 2) : s.slice(s.length / 2 + 1);
const last = R.compose(sliceLast, toString);
const lastNumber = R.compose(toNumber, last);
const lastNumberReverse = R.compose(toNumber, reverseString, last);

const constructMirror = (middle = undefined) => x => x + (middle ? middle : '') + reverseString(x);
const mirror = (x = undefined) => R.compose(constructMirror(x), toString);
const mirrorNumber = x => toNumber(mirror(middle(x))(firstNumber(x)));



const firstMiddle = s => isLenEven(s)
    ? first(s)
    : first(s) + middle(s);
const firstMiddleNumber = R.compose(toNumber, firstMiddle, toString);


const paldMultipleOf23d2 = () => {

    const palMults = [];

    R.range(100, 1000).map(x => {
        R.range(100, 1000).map(y => {
            const multiple = x * y;
            if (isPalindrome(multiple)) {
                palMults.push(multiple);
            }
        })
    });

    console.log(Math.max(...palMults));
}

paldMultipleOf23d2();

// console.log(paldMultipleOf23d(3210054))