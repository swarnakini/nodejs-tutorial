const http = require('http');
const url = require('url');

// Sample data (you can replace this with your data source)
const users = [
    { id: 1, name: 'swarna' },
    { id: 2, name: 'gowri' },
    { id: 3, name: 'kini' }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true); //incoming URL
    const pathname = reqUrl.pathname; // tells about path name is localhost:portno/pathname
    const query = reqUrl.query;

    // Handle GET request to /users endpoint
    if (pathname === '/users' && req.method === 'GET') { //if the pathname has got /users then this if condition will run
        res.writeHead(200, { 'Content-Type': 'application/json' }); //200 means statuscoe and it tell the user that the request was successfull and the content will be in the JSON format
        res.end(JSON.stringify(users)); //converting array of users into JSON format
    }
    
});

// Set the port and start the server
server.listen(3000);
