const http = require('http')

http.createServer(function(req, res){
let url = req.url
if(url === "/"){
    res.end("./home.html");
}else if(url === "/about"){
    res.end("./about.html");
}else if(url ==="/pricing"){
  res.end("./pricing.html");
}else if(url ==="contact"){
    res.end("./contact.html")
}else{
    res.end("page not found");
}
}).listen(1111)