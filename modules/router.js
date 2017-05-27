module.exports = () => {
  
  switch (req.url) {
  case '/':
  case '/index':
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/index.html').pipe(res);
    break;
  case '/chat':
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/chat.html').pipe(res);
    break;
  case '/signin':
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/signin.html').pipe(res);
    break;
  case '/signup':
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/singup.html').pipe(res);
    break;
  default:
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/public/404.html').pipe(res);
    break;
  }
  console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  
};