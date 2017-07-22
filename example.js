var express = require('express');
var app = express();
var compression = require('compression');

app.use(compression({ threshold: 0 }));
app.use(express.static(__dirname + '/public'));

app.all('/*', function(req, res, next) {
  console.log(req.headers);
  // res.sendFile('index.html', { root: __dirname + '/public' });
  res.status(200).json({ hello: 'hello' });
  // console.log(res);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
