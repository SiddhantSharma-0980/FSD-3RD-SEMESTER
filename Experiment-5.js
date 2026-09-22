const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.method === 'GET' && req.url === '/students') {
        res.statusCode = 200; res.end('GET: Student list');
    }
    else if (req.method === 'POST' && req.url === '/students') {
        res.statusCode = 201; res.end('POST: Student created');
    }
       
    
});