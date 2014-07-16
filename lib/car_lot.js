// Create a namespace if it doesn't exist.
var CarLot = CarLot || {};

CarLot.Lot = {
  name: "Honest Tom's Used Cars",
  cars: [],
  addCar: function(car){
    this.cars.push(car);
  },
  display: function(){
    var i = 0, displayStr = "";
    for(i; i < this.cars.length; i++){
      displayStr = displayStr + "\n" + this.cars[i].display();
    }
    return displayStr;
  },
  totalValue: function(){
    var i = 0, total = 0.0;
    for(i; i < this.cars.length; i++){
      total = total + this.cars[i].price;
    }
    return total;
  }
};

// Create EVERYTHING.
var bostonAddress = new CarLot.Address('51 Melcher St.','Boston', "MA", "US"),
  detroitAddress = new CarLot.Address('15 Elm St.','Detroit', "MI", "US"),
  tokyoAddress = new CarLot.Address('34 Main St.','Tokyo', "", "US"),
  ford = new CarLot.Maker('Ford', 1903, detroitAddress),
  toyota = new CarLot.Maker('Toyota', 1953, tokyoAddress),
  gm = new CarLot.Maker('GM', 1911, bostonAddress),
  ltd69 =  new CarLot.Car('LTD', 1969, 125.00, ford),
  camry2014 = new CarLot.Car('Camry', 2014, 25000.00, toyota),
  sierra2009 = new CarLot.Car('Sierra', 2009, 19500.00, gm);

CarLot.Lot.addCar(ltd69);
CarLot.Lot.addCar(camry2014);
CarLot.Lot.addCar(sierra2009);

debugger;
console.log(ltd69.display() + " price = " + ltd69.price );
console.log(camry2014.display() + " price = " + camry2014.price );
console.log(sierra2009.display() + " price = " + sierra2009.price );

console.log("All cars at " + CarLot.Lot.name);
console.log(CarLot.Lot.display());

console.log("Total value of all the cars is " + CarLot.Lot.totalValue());







