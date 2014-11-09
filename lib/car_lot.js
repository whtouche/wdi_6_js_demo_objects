carLot = {
  name: "Benton's Carton of Cars",
  cars: [
  firstCar,
  secondCar
  ],
  display: function(){
    var allCars = "";
    this.cars.forEach(function(car){
      allCars = allCars + " " + car.display();
    });
    return allCars;
  },
  totalValue: function(){
    return "$" + (firstCar.price + secondCar.price);
  }
};
// Create One car lot in lib/car_lot.js
// Properties are name and an array of cars.
// Methods are:
// addCar(car). This will add a car to the lot.
// display. This returns a string.
// totalValue. This return the total value of all the cars in the lot.

// Log the cars in the lot to the chrome console usiing console.log.
// Log the totalValue of all the cars in the lot to the chrome console.
