//Factory to create people
var createPerson = function(name, age) {

  //This method is private it is NOT exposed outside
  //the createPerson function
  var _display = function() {
    return this.name + " is " + this.age + " years old";
  };

  //Create an object literal, return it.
  return {
    name: name,
    age: age,
    describe: _display //use the private display method
  };
};

debugger;
var joe = createPerson("joe", 23);
var jill = createPerson("Jill", 32);

console.log(joe.describe());
console.log(jill.describe());
