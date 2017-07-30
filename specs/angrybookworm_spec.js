var assert = require('assert');
var BookWorm = require('../bookworm.js');
var AngryBookWorm = require('../angrybookworm.js');
var Store = require('../store.js');
var Book = require('../book.js');

describe('AngryBookWorm', function(){
  var angryBookworm1;

  beforeEach(function(){
    angryBookworm1 = new AngryBookWorm(30);
    store1 = new Store("Glasgow Book Shop", "Glasgow", 1000);
    book1 = new Book("The Trial", "Franz Kafka", "Classics", 10, 50000, true);
    book2 = new Book("The 80/20 Principle", "Richard Koch", "Business", 20, 60000, true);
    book3 = new Book("Neuromancer", "William Gibson", "Science Fiction", 9, 70000, false);
    book4 = new Book("Do Androids Dream of Electric Sheep?", "Philip K Dick", "Science Fiction", 5, 80000, false);
  });

  it("should be able to burn a book", function(){
    angryBookworm1.buyBook(book1);
    angryBookworm1.buyBook(book2);
    angryBookworm1.buyBook(book3);
    angryBookworm1.buyBook(book4);
    angryBookworm1.burnBook(book2);
    assert.strictEqual(angryBookworm1.library.length, 3);
  });

  it("should be able to deface a controversial book, ripping out a random number of pages", function(){
    angryBookworm1.buyBook(book1);
    angryBookworm1.defaceBook(book1);
    assert.strictEqual(book1.length, howDoYouTestARandomNumber);
  });

  it("should be able to read a controversial book, they should return an appropriate String, and stop immediately", function(){
    angryBookworm1.buyBook(book1);
    assert.strictEqual(angryBookworm1.readBook(book1), "Oh my days");
  });

});