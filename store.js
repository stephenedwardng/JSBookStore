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

  // listInventory: function(){
  //   inventory.forEach(function(book){
  //     book.toString();
  //   })
  // },

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
    return _.filter(this.inventory, function(book){
      return book.genre === genre;
    });
  },


};

module.exports = Store;