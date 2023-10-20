
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    res.end("We are on the homepage of the local host 5000");
    console.log('requested');
})
server.listen(5000, () => {
    console.log('listening on server 5000...')
});