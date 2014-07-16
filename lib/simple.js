// Create an Object literal representing one person.
var joe = {
  name: "Joe Smoe",
  age: 23,
  // Property value is a function, which is just an object
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

// OR
var jill = {};
jill.name = "Jill Smill";
jill.age = 32;

// Property value is a function
jill.describe = function(){
  return this.name + " is " + this.age + " years old";
};

console.log("Hey " + jill.name +  " where you going with that gun in your hand");
console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");
