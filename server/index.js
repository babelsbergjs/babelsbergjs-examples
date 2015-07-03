var bbb = require("babelsbergjs-core");
var bbb_cassowary = require("babelsbergjs-cassowary");

var express = require('express')
var app = express();

app.use(express.static('server/public'));

app.get('/positions', function (req, res) {
  res.send('30,30');
});
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
