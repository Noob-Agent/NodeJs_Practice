const { readFileSync, writeFileSync, read } = require('fs');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

writeFileSync('./content/third.txt', `Hello this is the result of the two files ${first + second}`)
