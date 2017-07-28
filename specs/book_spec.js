var assert = require('assert');
var Book = require('../book.js');

describe('Book', function(){
  var book1;

  beforeEach(function(){
    book1 = new Book("The Trial", "Franz Kafka", "Expressionist", 10);
  });

  it("should be able to get title", function(){
    assert.strictEqual(book1.title, "The Trial");
  });

  it("should be able to get author", function(){
    assert.strictEqual(book1.author, "Franz Kafka");
  });



});