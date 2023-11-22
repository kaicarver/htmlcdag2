var http = require('http');
var server = http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bonjour monde !\n');
});
server.listen(5000);
console.log('Le serveur écoute sur le port 5000 http://localhost:5000/');