const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our homepage and we Welcome you');
    }
    if (req.url === '/about') {
        res.end('This is our about page and We welcome U here as well. Take a look about our brief historia.');
    }
    res.end(`
    <h1> OOops !! </h1>
    <p> This page is not available </p>
    <a href="/"> Back Home </a>
    `)
})
server.listen(5000);