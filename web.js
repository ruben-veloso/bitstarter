var express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  response.send('Hello World 2!');
});


fs.readFile('index.html', 'utf-8', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
