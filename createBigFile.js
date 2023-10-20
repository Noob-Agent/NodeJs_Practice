const { writeFileSync } = require('fs');
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello this is line num ${i}.\n`, { flag: 'a' });
}