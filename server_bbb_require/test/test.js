var should = require("should");
var bbb = require("babelsbergjs-core");
var bbb_cassowary = require("babelsbergjs-cassowary");

describe('examples', function() {
  describe('setup', function() {
    it('finds modules and solves simple constraint..', function() {
      obj = {a: 1, b: 2};
      s = new bbb_cassowary.ClSimplexSolver();
      bbb.always({solver: s, ctx: {obj: obj}}, function () {
        return obj.a + 7 <= obj.b;
      });
      obj.a = 10;
      obj.b.should.not.be.lessThan(obj.a + 7);
    });
  });
});
