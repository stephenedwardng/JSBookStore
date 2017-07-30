var _ = require("lodash");

// // Can't get inheritance working so creating new class so I can continue the extension methods
// var AngryBookWorm = function(cash) {
//   BookWorm.call(this);
// }
// var AngryBookWorm.inherits(Bookworm);
// var AngryBookWorm = Object.create(BookWorm);
// AngryBookWorm.prototype.constructor = AngryBookWorm;

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
    book.length -= Math.floor(Math.random() * book.length);
  },

  readBook: function(book){
    return book.controversial ? "Oh my days" : "Oh what a lovely uncontroversial read";
  },

};

module.exports = AngryBookWorm;