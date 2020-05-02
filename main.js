var http = require('http');
var url = require('url');
let fs = require('fs');

http.createServer(function (req, response) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var page = '';
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });

}).listen(1000, 'localhost');
console.log('Server running at http://localhost:1000/');
