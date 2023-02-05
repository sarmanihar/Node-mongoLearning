//'np init' is SLOWER than 'npm init -y"

const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);