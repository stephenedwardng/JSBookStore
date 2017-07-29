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

};

module.exports = BookWorm;