var assert = require('assert');
var Book = require('../book.js');

describe('Book', function(){
  var book1;

  beforeEach(function(){
    book1 = new Book("The Trial", "Franz Kafka", "Fiction", 10);
  });

  it("should be able to get title", function(){
    assert.strictEqual(book1.title, "The Trial");
  });

  it("should be able to get author", function(){
    assert.strictEqual(book1.author, "Franz Kafka");
  });

  it("should print out the Books properties as a string", function(){
    assert.strictEqual(book1.printProperties(), "Title: The Trial, Author: Franz Kafka, Genre: Fiction, Price: £10; ");
  });



});