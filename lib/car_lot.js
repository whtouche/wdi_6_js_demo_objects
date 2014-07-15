var carLot = {
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
var bostonAddress = createAddress('51 Melcher St.','Boston', "MA", "US"),
  detroitAddress = createAddress('15 Elm St.','Detroit', "MI", "US"),
  tokyoAddress = createAddress('34 Main St.','Tokyo', "", "US"),  
  ford = createMaker('Ford', 1903, detroitAddress),
  toyota = createMaker('Toyota', 1953, tokyoAddress),  
  gm = createMaker('GM', 1911, bostonAddress),
  ltd69 = createCar('LTD', 1969, 125.00, ford),
  camry2014 = createCar('Camry', 2014, 25000.00, toyota),
  sierra2009 = createCar('Sierra', 2009, 19500.00, gm);

carLot.addCar(ltd69);
carLot.addCar(camry2014);
carLot.addCar(sierra2009);

debugger;
console.log(ltd69.display() + " price = " + ltd69.price );
console.log(camry2014.display() + " price = " + camry2014.price );
console.log(sierra2009.display() + " price = " + sierra2009.price );

console.log("All cars at " + carLot.name);
console.log(carLot.display());

debugger;
console.log("Total value of all the cars is " + carLot.totalValue());