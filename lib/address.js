// Create a namespace if it doesn't exist.
var CarLot = CarLot || {};

// Constructor Function for Address
CarLot.Address = function(street, city, state, country){
  this.street = street;
  this.city = city;
  this.state = state;
  this.country = country;
}

CarLot.Address.prototype.display = function(){
  return this.street + ", " + this.city + " " + this.state + ", " + this.country;
}