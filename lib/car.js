// Create a namespace if it doesn't exist.
var CarLot = CarLot || {};

// Constructor Function for Car.
CarLot.Car = function(model, year, price, maker){
  this.model = model;
  this.year = year;
  this.price = price;
  this.maker = maker;
};

CarLot.Car.prototype.display = function(){
  return this.year + " " + this.maker.name + " " + this.model;
};