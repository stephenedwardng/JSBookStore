var assert = require('assert');
var BookWorm = require('../bookworm.js');

describe('BookWorm', function(){
  var bookworm1;

  beforeEach(function(){
    bookworm1 = new BookWorm(50);
  });

  it("should be able to get cash", function(){
    assert.strictEqual(bookworm1.cash, 50);
  });

  it("should be able to buy a book", function(){
    assert.strictEqual(bookworm1.cash, 50);
  });

});