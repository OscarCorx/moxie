const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
function loadFile(fileName) {
  return fs.readFileSync(path.join(__dirname, 'public', fileName));
}


const server = http.createServer((req, res) => {
  const url = `http://${req.headers.host}${req.url}`;
  console.log('Incoming Request', url);
  const urlParts = new URL(url);
  console.log('URL', urlParts);

  let content;
  if (urlParts.pathname === '/') {
    content = loadFile('index.html');
  } else {
    const content = loadFile(url.pathname.slice(1));
  } 
  
  res.writeHead(200);
  res.write(content);
  res.end();
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});