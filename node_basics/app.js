//SENDING RESPONSE START
//const http = require('http');  //require is a module which is calling http
// const server=http.createServer((req,res)=>{
// res.setHeader('Content-Type','text/html');
// res.write('<html>');
// res.write('<head><title>My First Page</title></head>');
// res.write('<body><h1>Data inside my first page</h1></body>');
// res.end(); // This line tell the user that the response is ended here. After this no response can be sent again.
// res.write('</html>');
// });
// server.listen(3000);
//SENDING RESPONSE END


//ROUTING CONCEPT START
// const http = require('http');  //require is a module which is calling http
// const server=http.createServer((req,res)=>{

//     const url=req.url; //creating a constant called url where the url is getting from request

//     if(url==='/') //if url = '/' ie localhost
//     {
//         res.setHeader('Content-Type','text/html');
//         res.write('<html>');
//         res.write('<head><title>Enter the message:</title></head>');
//         res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">SEND</button></form></body>');
//         res.write('</html>');
//         return res.end();
//     }

//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Data inside my first page</h1></body>');
//     res.end(); // This line tell the user that the response is ended here. After this no response can be sent again.res.write('</html>');
    
//     });
//     server.listen(3000);
//ROUTING CONCEPT END


//REDIRECTING CONCEPT START
const http = require('http');  //require is a module which is calling http
const fs=require('fs');


const server=http.createServer((req,res)=>{
const url=req.url; //creating a constant called url where the url is getting from request
const method=req.method;
    if(url==='/') //if url = '/' ie localhost
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter the message:</title></head>');
        res.write('<body><form action="/message" method="POST"> <input type="text" name="message"><button type="submit">SEND Inpsuts1</button></form><form action="/message2" method="POST"> <input type="text" name="message2"><button type="submit">SEND Input 2</button></form></body>');
       
        res.write('</html>'); 
        return res.end();
    }
    if(url==='/message' && method==='POST')
    {
        //Node.js reads data in chunks means it uses streams to read data . 
        //First read data in chunks
        // passenger and bus concept ie how the passengers gets into bus when the bus stops in the same way the data is pushed in chunks and then parsed
        const requestBody = [];
        req.on('data', (chunks)=>
        {
        requestBody.push(chunks); 
        });
        //We have registred an event called ‘data’ on incoming http request. This event will keep on streaming data and pushes to requestBody const variable.
        //Append the whole request data
        //Once data is completed, we will convert the received data to string with ‘end ’ event
        //Buffer is the bus stop
        req.on('end', ()=>
        {
        const parsedData = Buffer.concat(requestBody).toString();
        console.log(parsedData); //parseddata will have the result in Key value pair ie key = message and value will be the user input
        const message=parsedData.split('=')[1]; // here we are splitting the key value pair so that only the user enetered data will get reflected in mynewtextfile.txt
        fs.writeFileSync('mynewtextfile.txt',message);
        });

        fs.writeFileSync('mynewtextfile.txt','Data inside it');
        res.statusCode=302 // redirect code
        res.setHeader('Location','/');
        return res.end();
    }

    if(url==='/message2' && method==='POST')
    {
        //Node.js reads data in chunks means it uses streams to read data . 
        //First read data in chunks
        // passenger and bus concept ie how the passengers gets into bus when the bus stops in the same way the data is pushed in chunks and then parsed
        const requestBody = [];
        req.on('data', (chunks)=>
        {
        requestBody.push(chunks); 
        });
        //We have registred an event called ‘data’ on incoming http request. This event will keep on streaming data and pushes to requestBody const variable.
        //Append the whole request data
        //Once data is completed, we will convert the received data to string with ‘end ’ event
        //Buffer is the bus stop
        req.on('end', ()=>
        {
        const parsedData = Buffer.concat(requestBody).toString();
        console.log(parsedData); //parseddata will have the result in Key value pair ie key = message and value will be the user input
        const message2=parsedData.split('=')[1]; // here we are splitting the key value pair so that only the user enetered data will get reflected in mynewtextfile.txt
        fs.writeFileSync('mynewtextfile2.txt',message2);
        });

        fs.writeFileSync('mynewtextfile2.txt','Data inside itttt');
        res.statusCode=302 // redirect code
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Data inside my first page</h1></body>');
    res.end(); // This line tell the user that the response is ended here. After this no response can be sent again.res.write('</html>');
    
    });
    server.listen(3000);
//REDIRECTING CONCEPT END


