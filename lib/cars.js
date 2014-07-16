firstCar = {
  model: 'Element',
  year: '2003',
  price: 60000,
  make: honda,
  display: function(){
    return honda.name + " " + this.model + " " + this.year + " $" + this.price;
  }
};

secondCar = {
  model: 'LeSabre',
  year: '1984',
  price: 5000,
  make: buick,
  display: function(){
    return buick.name + " " +this.model + " " + this.year + " $" + this.price;
  }
};
// Create a couple of cars in lib/cars.js
// Properties are model, year, price and make (use one of the makes created above for this property).
// Methods are display. This returns a string.
