const R = require('ramda');


const divisibleBy23dN = n =>
    R.range(100, 999)
        .filter(x => R.range(100, 999).includes(n / x))
        .map(x => [x, n / x]);


const isEven = s => s.length % 2 === 0;
const toString = x => x.toString();
const toNumber = x => parseInt(x, 10);
const reverseString = x => x.split('').reverse().join('');

const isPalindrome = x => first(x) === reverseString(last(x));

const sliceFirst = s => s.slice(0, s.length / 2);
const first = R.compose(sliceFirst, toString);
const firstNumber = R.compose(toNumber, first);
const firstNumberReverse = R.compose(toNumber, reverseString, first);

const sliceMiddle = s => isEven(s) ? undefined : s.slice(s.length / 2, s.length / 2 + 1);
const middle = R.compose(sliceMiddle, toString);

const sliceLast = s => isEven(s) ? s.slice(s.length / 2) : s.slice(s.length / 2 + 1);
const last = R.compose(sliceLast, toString);
const lastNumber = R.compose(toNumber, last);
const lastNumberReverse = R.compose(toNumber, reverseString, last);

const constructMirror = (middle = undefined) => x => x + (middle ? middle : '') + reverseString(x);
const mirror = (x = undefined) => R.compose(constructMirror(x), toString);
const mirrorNumber = x => toNumber(mirror(middle(x))(firstNumber(x)));


console.log(divisibleBy23dN(359301));

const maxmultiple23dn = 999 * 999;

const paldMultipleOf23d = () => {

    const x = maxmultiple23dn;
    console.log(x);

    if (firstNumberReverse(x) <= lastNumber(x)) {
        console.log("Smaller");
        return mirror(middle(x))(first(x));
      } else {
        console.log("Bigger");
        return mirrorNumber(x);
      }
}

const n1 = 123453467;

console.log(first(n1));
console.log(middle(n1));
console.log(last(n1));
console.log(mirror(5)(321));
console.log(isPalindrome(3219123))

console.log(paldMultipleOf23d())