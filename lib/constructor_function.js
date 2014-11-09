// Constructor Function object creation

// Constructor function is camel cased by convention.
var Person = function(name, age){
    this.name = name;
    this.age = age;
};

// Define all the methods for Person in an object literal.
// A little faster than above, defining them individually.
Person.prototype = {
   describe: function(){
    return this.name + " is " + this.age + " years old";
   }
};

var joe = new Person('joe', 23),
  jill = new Person('jill', 32);

console.log(joe.describe());
console.log(jill.describe());
