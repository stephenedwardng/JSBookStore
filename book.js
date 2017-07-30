var Book = function(title, author, genre, price, length, controversial){
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  this.length = length;
  this.controversial = controversial;
};

Book.prototype = {

  printProperties: function(){
    return "Title: " + this.title + ", Author: " + this.author + ", Genre: " + this.genre + ", Price: £" + this.price + "; ";
  },

};

module.exports = Book;