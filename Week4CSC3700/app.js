let http = require("http"); // load the http module
let uc = require('upper-case');
let port = 8081;
let t = {'Content-type': 'text/html'};
http.createServer(function (req, res) {
    // console.log("REQ=");
    // console.log(req);
    let oStr = uc.upperCase("<h1><span style='color:red'>Hello World</span></h1>")
    oStr += `<br /> URL:${req.url}`;
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end(oStr);
}).listen(port);
console.log(`listening on http://localhost:${port}`)