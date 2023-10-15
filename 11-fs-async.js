const fs = require('fs');
// console.log(fs);
const writeFile = fs.writeFile;
const readFile = fs.readFile;

readFile('./content/first.txt', 'utf8', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = res;
    readFile('./content/second.txt', 'utf8', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = res;
        writeFile('./content/result-async.txt',
            `Here is the combined result : ${first} and ${second}`,
            (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(res);
            })
    })
})