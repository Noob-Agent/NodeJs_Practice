// npm - Global command comes with node
// npm --version

// local dependencies - use it only in this particular project
// npm i <package name>

// global dependencies - use it in any project
// npm install -g <package name>

// package.json - manifest file(stores important info about project/package)
// npm init -y

const _ = require('lodash');
const item = [1, [2, [3, [4, [5, [6, [7, [8]]]]]]]];
const newItem = _.flattenDeep(item);
console.log(newItem);
console.log("Hello Brother");

// flow {npm init -y -> npm i <required packages> -> require the modules -> start using them}