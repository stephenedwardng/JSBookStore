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
    store1 = new Store("Glasgow Book Shop", "Glasgow", 1000);
    book1 = new Book("The Trial", "Franz Kafka", "Classics", 10, 500, true);
    book2 = new Book("The 80/20 Principle", "Richard Koch", "Business", 20, 600, true);
    book3 = new Book("Neuromancer", "William Gibson", "Science Fiction", 9, 700, false);
    book4 = new Book("Do Androids Dream of Electric Sheep?", "Philip K Dick", "Science Fiction", 5, 700, false);
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

  it("should be able to list inventory", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    var inventoryList = [book1, book2];
    assert.deepEqual(store1.listInventory(), inventoryList);
  });

  it("should be able to sell book", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    store1.addBook(book3);
    store1.addBook(book4);
    store1.sellBook(book1);
    assert.strictEqual(store1.inventory.length, 3);
  });

  it("should adjust the Store balance to account for the Book being sold", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    store1.addBook(book3);
    store1.addBook(book4);
    store1.sellBook(book1);
    assert.strictEqual(store1.balance, 990);
  });

  it("should calculate inventory value", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    store1.addBook(book3);
    store1.addBook(book4);
    assert.strictEqual(store1.inventoryValue(), 44);
  });

  it("should calculate financial situation of the Store. Balance and value of inventory", function(){
    store1.addBook(book1);
    store1.addBook(book2);
    store1.addBook(book3);
    store1.addBook(book4);
    assert.strictEqual(store1.total(), 1044);
  });

// How do I get the object comparison to match in the test? 
  it("should be able to view all Books of a given Genre", function(){
    var scifiInventory = [ 'Neuromancer', 'Do Androids Dream of Electric Sheep?' ];
    assert.deepEqual(store1.viewByGenre("Science Fiction"), scifiInventory);
  });

});