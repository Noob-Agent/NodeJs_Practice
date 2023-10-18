const { readFile, writeFile } = require('fs');
const util = require('util');
// this is built in inside node and it is used here to promisify any function
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        console.log(first, second);
        await writeFilePromise('./content/promiseAsyncWriteFile.txt', `This is the file where we merge the first and second file. ${first} ${second}`);
    } catch (error) {
        console.log(error);
    }
}
start();