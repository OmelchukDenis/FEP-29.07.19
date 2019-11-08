const _ = require('lodash')
const hello = require('./hello')
const utils = require('./utils');

const arr = [1,2,3];
console.log(_.filter(arr, (value) => value % 2))

console.log('utils', utils);
// hello.say('Hello world');