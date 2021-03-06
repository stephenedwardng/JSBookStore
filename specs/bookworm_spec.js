var assert = require('assert');
var BookWorm = require('../bookworm.js');
var Store = require('../store.js');
var Book = require('../book.js');

describe('BookWorm', function(){
  var bookworm1;
  var bookworm2;
  var store1;
  var book1;
  var book2;
  var book3;
  var book4;

  beforeEach(function(){
    bookworm1 = new BookWorm(50);
    bookworm2 = new BookWorm(8);
    store1 = new Store("Glasgow Book Shop", "Glasgow", 1000);
    book1 = new Book("The Trial", "Franz Kafka", "Classics", 10, 50000);
    book2 = new Book("The 80/20 Principle", "Richard Koch", "Business", 20, 60000);
    book3 = new Book("Neuromancer", "William Gibson", "Science Fiction", 9, 70000);
    book4 = new Book("Do Androids Dream of Electric Sheep?", "Philip K Dick", "Science Fiction", 5, 80000);
  });

  it("should be able to get cash", function(){
    assert.strictEqual(bookworm1.cash, 50);
  });

  it("should be able to buy a book - decrease cash", function(){
    bookworm1.buyBook(book3);
    assert.strictEqual(bookworm1.cash, 41);
  });

  it("should be able to buy a book - add book to library", function(){
    bookworm1.buyBook(book3);
    assert.strictEqual(bookworm1.library.length, 1);
  });

  it("should be able to sell a book - increase cash", function(){
    bookworm1.sellBook(book2);
    assert.strictEqual(bookworm1.cash, 70);
  });

  it("should be able to sell a book - remove book from library", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm1.buyBook(book3);
    bookworm1.buyBook(book4);
    bookworm1.sellBook(book2);
    assert.strictEqual(bookworm1.library.length, 3);
  });

  it("should not be able to buy a Book if they can't afford it", function(){
    bookworm2.buyBook(book3);
    assert.strictEqual(bookworm1.library.length, 0);
  });

  it("should be able to view the total value of their collection", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm1.buyBook(book3);
    bookworm1.buyBook(book4);
    assert.strictEqual(bookworm1.libraryValue(), 44);
  });

  it("should be able to view the total value of all books of a given Genre", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm1.buyBook(book3);
    bookworm1.buyBook(book4);
    assert.strictEqual(bookworm1.valueByGenre("Science Fiction"), 14);
  });

  it("should be able to view their longest book", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm1.buyBook(book3);
    bookworm1.buyBook(book4);
    assert.deepEqual(bookworm1.longestBook(), book4);
  });

  it("should be able to sort their books by value. Ascending or descending", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm1.buyBook(book3);
    bookworm1.buyBook(book4);
    var librarySort = [book4, book3, book1, book2]; 
    assert.deepEqual(bookworm1.sortByValue(), librarySort);
  });

  it("should be able to compare the value of their collection with another BookWorm", function(){
    bookworm1.buyBook(book1);
    bookworm1.buyBook(book2);
    bookworm2.buyBook(book4);
    assert.strictEqual(bookworm1.compareValueWith(bookworm2), 25);
  });



});