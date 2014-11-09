//Car factory
var createCar = function(model, year, price, make) {
  var display = function() {
    return honda.name + " " + this.model + " " + this.year + " $" + this.price;
  };
  return {
    model: model,
    year: year,
    price: price,
    make: make,
    display: display
  };
};
