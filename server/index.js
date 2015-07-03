var express = require('express');
var bbb_require = require("babelsbergjs-require");

var CollisionConstraint = bbb_require('./server/constraint_avoids_collision.bbb');

var rects = {
  'first': {width: 200, height: 100, x: 50, y: 50},
  'second': {width: 200, height: 100, x: 300, y: 300}
};

var constraint = new CollisionConstraint(rects['first'], rects['second']);
constraint.enforce();

var app = express();
app.use(express.static('server/public'));

app.get('/position/:rect_id', function (req, res) {
  rects[req.params.rect_id].x = parseInt(req.query.left);
  rects[req.params.rect_id].y = parseInt(req.query.top);
  rects[req.params.rect_id].width = parseInt(req.query.width);
  rects[req.params.rect_id].height = parseInt(req.query.height);
  res.json({
    'first': {
      x: rects['first'].x,
      y: rects['first'].y,
      width: rects['first'].width,
      height: rects['first'].height
    },
    'second': {
      x: rects['second'].x,
      y: rects['second'].y,
      width: rects['second'].width,
      height: rects['second'].height
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
