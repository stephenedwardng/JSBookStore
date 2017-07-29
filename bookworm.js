var _ = require("lodash");

var BookWorm = function(cash){
  this.cash = cash;
  this.library = [];
};

BookWorm.prototype = {

  buyBook: function(book){
    if (this.cash > book.price){
     this.library.push(book);
      this.cash -= book.price;
    }
  },

  sellBook: function(book){
    _.remove(this.library, book);
    this.cash += book.price;
  },  

  libraryValue: function(){
    return _.sumBy(this.library, function(book) { 
      return book.price; 
    });
  },  

  valueByGenre: function(genre){
    var booksByGenre = _.filter(this.library, function(book){
      return book.genre === genre;
    });

    return _.sumBy(booksByGenre, function(book) { 
      return book.price; 
    });
  },

  sortByValue: function(){
    return _.sortBy(this.library, [function(book) { 
      return book.price; 
    }]);
  },  

  compareValueWith: function(bookworm2){
    return this.libraryValue() - bookworm2.libraryValue();
  },  

};

module.exports = BookWorm;