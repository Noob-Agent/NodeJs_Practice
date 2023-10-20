const { createReadStream } = require('fs');
const stream = createReadStream('./content/big.txt', { encoding: 'utf8' });

//we use stream.on event and the parameter is data for this 
stream.on('data', (res) => {
    console.log(res);
})

// we read 64kb of data in chunks