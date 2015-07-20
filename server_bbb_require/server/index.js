var express = require('express');
var bbb_require = require('babelsbergjs-require');
var CollisionConstraint = bbb_require('./server/collision_constraint.bbb');


var rects = {
  first: {width: 200, height: 100, x: 50, y: 50},
  second: {width: 75, height: 50, x: 300, y: 300}
};
var collisionConstraint = new CollisionConstraint(rects.first, rects.second);


// Setup Express app (static files and request handling)
var app = express();
app.use(express.static('server/public'));
app.get('/position/:rect_id', function(req, res) {
  rects[req.params.rect_id].x = parseInt(req.query.left);
  rects[req.params.rect_id].y = parseInt(req.query.top);
  rects[req.params.rect_id].width = parseInt(req.query.width);
  rects[req.params.rect_id].height = parseInt(req.query.height);
  res.json({
    first: makeJson(rects.first),
    second: makeJson(rects.second)
  });
});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app at http://%s:%s is waiting to move your objects.',
              host, port);
});


/**
 * Wraps a rect into a new JSON object. This is necessary as Constraint
 * manipulate the original object which causes them to contain loop references.
 * @param {!Object} rect One of the two rects.
 * @return {!Object}
 */
function makeJson(rect) {
  return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height
    };
}





















/* AutoCompletion for Demo
var bbb_require = require('babelsbergjs-require');
var CollisionConstraint = bbb_require('./server/collision_constraint.bbb');
var collisionConstraint = new CollisionConstraint(rects.first, rects.second);
*/
