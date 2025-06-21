const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js server running!');
});

server.listen(3000, () => {clearScreenDown
  console.log('Server is running');
});
