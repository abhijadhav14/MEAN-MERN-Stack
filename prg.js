const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Hello World</h1>');
        res.write('<p>This is a simple HTTP server.</p>');
        res.end();
    } else if(req.url==='/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        const date=new Date();
        res.write('<h1>prg.js</h1>');
        res.write('<p>Current Date and Time</p>');
        res.write("<h3>"+date+"</h3>");
        res.end();
    }
});


server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});