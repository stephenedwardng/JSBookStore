var _ = require("lodash");

var BookWorm = function(cash){
  this.cash = cash;
  this.library = [];
};

BookWorm.prototype = {

  buyBook: function(book){
    this.library.push(book);
    this.cash -= book.price;
  },

};

module.exports = BookWorm;