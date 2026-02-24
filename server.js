const http = require('node:http');

const server = http.createServer((req, res) => {
  const responseBody = JSON.stringify({ message: 'success', data: 'Hello World!' });

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(responseBody);
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});