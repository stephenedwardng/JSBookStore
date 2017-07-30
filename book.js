var Book = function(title, author, genre, price, length){
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.price = price;
  this.length = length;
};

Book.prototype = {

  printProperties: function(){
    return "Title: " + this.title + ", Author: " + this.author + ", Genre: " + this.genre + ", Price: £" + this.price + "; ";
  },

};

module.exports = Book;