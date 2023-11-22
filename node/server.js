var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>');
        res.end();
    }
});
server.listen(5000);
console.log('Le serveur écoute sur le port 5000 http://localhost:5000/');