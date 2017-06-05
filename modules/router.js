module.exports = (app) => {
  
  var bodyParser = require('body-parser'),
      urlencodedParser = bodyParser.urlencoded({extended: false});
  
  app.get('/', (req, res) => {
    res.render('index');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.get('/index', (req, res) => {
    res.render('index');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.get('/chat', (req, res) => {
    res.render('chat');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.post('/signin', (req, res) => {
    res.render('signin');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.post('/signin', urlencodedParser, (req, res) => {
    res.render('signin');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
  app.get('*', (req, res) => {
    res.render('404');
    console.log(`Request: ${req.url}, status: ${res.statusCode} - ${res.statusMessage}`);
  });
  
};