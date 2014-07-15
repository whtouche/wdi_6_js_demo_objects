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


carLot.addCar(ltd69);
carLot.addCar(camry2014);
carLot.addCar(sierra2009);

// console.log(ltd69.display() + " price = " + ltd69.price );
// console.log(camry2014.display() + " price = " + camry2014.price );
// console.log(sierra2009.display() + " price = " + sierra2009.price );

console.log("All cars at " + carLot.name);
console.log(carLot.display());

debugger;
console.log("Total value of all the cars is " + carLot.totalValue());

