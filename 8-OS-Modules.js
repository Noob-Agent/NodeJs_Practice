// OS Modules
// It provides many built in properties and methods for interacting with operating system and the server.

const os = require('os');
// console.log(os);
const user = os.userInfo();
console.log(user);
const time = os.uptime();
console.log(`The system uptime is ${time} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs.name, currentOs.release, currentOs.totalMem, currentOs.freeMem)