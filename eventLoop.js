// const { readFile } = require('fs');
// console.log("started a first task");

// readFile('./content/first.txt', 'utf8', (err, res) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(res);
//     console.log('completed the first task');
// })
// console.log('starting next task');



// console.log("This is the first task");
// setTimeout(() => {
//     console.log("This is the second task");
// }, 0);
// console.log("This is the third task");

const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request event");
    res.end("Hello I am under the water here too much raining");
})
server.listen(5000, () => {
    console.log('Listening on server port 5000...');
})