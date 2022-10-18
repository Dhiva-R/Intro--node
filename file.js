var http=require('http');
var fs=require('fs');
var url=require('url');
//const  PORT=process.env.PORT || 5000

http.createServer(function(req,res)
{
    var q=url.parse(req.url,true);
    var filename="."+q.pathname;

    if(filename == './'){filename='./index';}

    filename=filename+ ".html";
    fs.readFile(filename,function(err,data){

        if(err){
            res.writeHead(400,{'content-type':'text/html'});
            return res.end('404 NotFound');
        }
    
    res.writeHead(200,{'content-type':'text/html'});
    res.write(data);
   console.log(filename);
    return res.end();
    })
}).listen(8585);
console.log("Sever Listening on port 8585");