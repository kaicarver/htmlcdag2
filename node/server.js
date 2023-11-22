var http = require('http');
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the home page</h1><a href="/students/">lien student</a> <a href="/student/">lien invalide</a></body></html>');
        res.end();
    } else if (req.url === '/students/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the student page</h1><a href="/">home</a></body></html>');
        res.end();
    } else {
        res.end('Invalid Request !');
    }
});
server.listen(5000);
console.log('Le serveur écoute sur le port 5000 http://localhost:5000/');