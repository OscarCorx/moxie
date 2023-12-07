const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
function loadFile(fileName) {
  if (fileName === 'favicon.ico') {
    return '';
  }
  const pathName = path.join(__dirname, 'public', fileName);
  return fs.readFileSync(pathName) || '';
}


const server = http.createServer((req, res) => {
  const url = `http://${req.headers.host}${req.url}`;
  console.log('Incoming Request', url);
  const urlParts = new URL(url);
  console.log('URL NOW', urlParts);

  let content;
  if (urlParts.pathname === '/') {
    content = loadFile('index.html');
  } else {
    content = loadFile(urlParts.pathname.slice(1)) || 'TEMP';
  } 
  res.writeHead(200);
  res.write(content);
  res.end();
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});