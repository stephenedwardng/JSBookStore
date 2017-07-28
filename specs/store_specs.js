var assert = require('assert');
var Store = require('../store.js');
var Book = require('../book.js');

describe('Store', function(){
  var store1;
  var book1;
  var book2;
  var book3;
  var book4;

  beforeEach(function(){
    store1 = new Store("Glasgow Book Shop", "Glasgow");
    book1 = new Book("The Trial", "Franz Kafka", "Classics", 10);
    book2 = new Book("The 80/20 Principle", "Richard Koch", "Business", 20);
    book3 = new Book("Neuromancer", "William Gibson", "Science Fiction", 9);
    book4 = new Book("Do Androids Dream of Electric Sheep?", "Philip K Dick", "Science Fiction", 5);
  });

  it("should be able to get name", function(){
    assert.strictEqual(store1.name, "Glasgow Book Shop");
  });

  it("should be able to get city", function(){
    assert.strictEqual(store1.city, "Glasgow");
  });

  it("should be able to add book", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    store1.addBook(book3);
    store1.addBook(book4);
    assert.strictEqual(store1.inventory.length, 4);
  });

});