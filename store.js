var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

Store.prototype = {

  addBook: function(book){
    this.inventory.push(book);
  },

  listInventory: function(){
    
  },


};

module.exports = Store;