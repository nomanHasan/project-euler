const {range} = require('../lib/range');

const {multiple} = require('../lib/multiple');


console.log(range(1, 999).filter(x => 
    multiple(3)(x) || multiple(5)(x))
    .reduce((sum, obj) => sum + obj, 0));
