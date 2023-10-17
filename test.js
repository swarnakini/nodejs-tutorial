const http = require("http");
const url = require("url");

const employee = [
  { id: 1, name: "Praveen" },
  { id: 2, name: "Kamath" },
];

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true); // to get the incoming url
  const mypathname = reqUrl.pathname; // to get the pathname after adding the localhost portno

  //To check if the pathname is having some specific name
  if (mypathname === "/employee" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" }); // this will say the user the the request is successfull and the content will be in the JSON format
    res.end(JSON.stringify(employee));
  }
});

server.listen(2500); // tell that run the application in this port
