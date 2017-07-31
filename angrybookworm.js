var _ = require("lodash");
var BookWorm = require("./BookWorm");

var AngryBookWorm = function(cash) {
  BookWorm.call(this);
}

var AngryBookWorm = Object.create(BookWorm);
AngryBookWorm.prototype.constructor = AngryBookWorm;

var AngryBookWorm = function(cash){
  this.cash = cash;
  this.library = [];
};

AngryBookWorm.prototype = {

  buyBook: function(book){
    if (this.cash > book.price){
     this.library.push(book);
      this.cash -= book.price;
    }
  },

  burnBook: function(book){
  _.remove(this.library, book);
  },

  defaceBook: function(book){
    book.length -= _.random(0, book.length);
  },

  readBook: function(book){
    return book.controversial ? "Oh my days" : "Oh what a lovely uncontroversial read";
  },

};

module.exports = AngryBookWorm;