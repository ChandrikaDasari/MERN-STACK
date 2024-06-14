const http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/plain"});
    res.write(req.url);
    res.end();
}).listen(8000, () => {
    console.log("Server is listening on port 8000");
});