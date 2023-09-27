let http = require("http"); // load the http module
let url = require('url');
let fs = require('fs');
let port = 8081;
let t = {'Content-type': 'text/html'};

http.createServer( function ( req, res ){
    let q = url.parse(req.url, true);
    let fName = "." + q.pathname;
    console.log(`fName=${fName}`);

    fs.readFile( fName, function( err, data ){
        if( err ){
            res.writeHead( 404, {'Content-type': 'text/html'})
            res.end(`Error File:${fName} not found` );
            return;
        }
        console.log("---- No Err "); console.log( "Data="); console.log( data );
        res.writeHead( 200, {'Content-type': 'text/html'})
        res.write( data );
        res.end();
    })
}).listen( port );
console.log(`listening on http://localhost:${port}`)
