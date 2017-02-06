var http = require("http");
var url = require("url");
var ss = require('querystring');

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        console.log('url:  ' + request.url.toString());
        console.log("Request for pathname: " + pathname + " received.");
        console.log("Request for query: " + query + " received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World,hahaha");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;