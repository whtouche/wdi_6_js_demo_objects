// Create a namespace if it doesn't exist.
var CarLot = CarLot || {};

// Constructor Function for Car Maker
CarLot.Maker = function(name, est_year, address ){
  this.name = name;
  this.est = est_year;
  this.address = address;
};

CarLot.Maker.prototype.display = function(){
  return this.name + " was established in " + this.est + ". Address is " + address.display();
};
