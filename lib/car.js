var createCar = function(model, year, price, maker){
  var display = function(){
    return this.year + " " + this.maker.name + " " + this.model;
  };

  return {
    model: model,
    year: year,
    price: price,
    maker: maker,
    display: display
  }
};