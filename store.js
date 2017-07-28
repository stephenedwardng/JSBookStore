var _ = require("lodash");

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 1000;
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

  inventoryValue: function(){
    return _.sumBy(this.inventory, function(book) { 
      return book.price; 
    });
  },  

  total: function(){
    return this.balance + this.inventoryValue();
  },  


};

module.exports = Store;