var _ = require("lodash");

var Store = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = balance;
};

Store.prototype = {

  addBook: function(book){
    this.inventory.push(book);
  },

  listInventory: function(){
    return this.inventory;
  },

  sellBook: function(book){
    _.remove(this.inventory, book);
    this.balance -= book.price;
  },  

  inventoryValue: function(){
    return _.sumBy(this.inventory, function(book) { 
      return book.price; 
    });
  },  

  total: function(){
    return this.balance + this.inventoryValue();
  },  

  viewByGenre: function(genre){
    var booksByGenre = _.filter(this.inventory, function(book){
      return book.genre === genre;
    });

    return booksByGenre.map(function(book) {
      return book.title;
    });

  },


};

module.exports = Store;