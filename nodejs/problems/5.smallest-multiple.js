const R = require('ramda');

const isDivisbleBy = (x ,y) => n =>
    R.range(x, y+1).filter(e => {
        if (n % e === 0) {
            return true;
        } else {
            return false;
        }
    }).length === R.range(x, y+1).length;


const isDivisbleBy1to10 = isDivisbleBy(1, 10);
const isDivisbleBy1to20 = isDivisbleBy(1, 20);

console.log(isDivisbleBy1to10(2520));

let i = 1;
while(true) {
    console.log(i);
    if (isDivisbleBy1to20(i)) {
        break;
    }
    i ++;
}

console.log(i);