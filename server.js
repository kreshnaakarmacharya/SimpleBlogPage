const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// Create server
const server = http.createServer((req, res) => {
    // Log request URL and method
    console.log(`Request: ${req.method} ${req.url}`);

    // Lodash examples
    const num = _.random(0, 20); // random number 0-20
    console.log(`Random number: ${num}`);

    const greet = _.once(() => console.log('Hello')); // function runs once
    greet();
    greet();

    // Set header
    res.setHeader('Content-Type', 'text/html');

    // Determine file path
    let path = './views';
    switch (req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return; // important to exit after redirect
        default:
            path += '/404.html';
            res.statusCode = 404; // 404 instead of 400
            break;
    }

    // Send HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('<h1>Server Error</h1>');
        } else {
            res.end(data);
        }
    });
});

// Listen on port
server.listen(3000, 'localhost', () => {
    console.log('Server is listening on http://localhost:3000');
});