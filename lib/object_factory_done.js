 var createPerson = function(name, age) {
 // create an object literal from the arguments and 
 // return it.
 return {
   name: name,
   age: age,
   describe: function(){
    return this.name + " is " + this.age + " years old";
   }
  };
 };
 var joe = createPerson("joe", 23);
 var jill = createPerson("jill", 32);

console.log(joe.describe());
console.log(jill.describe());