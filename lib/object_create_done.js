// Define a person
var person = {
    kind: 'person',
};

debugger;

// Create a person instance, sue.
var sue = Object.create(person, {name: "Susan", age: 34 });
console.log(sue.kind); // person
console.log(sue.name); // 'Susan'
console.log(sue.age); // 34

// Look at sue in chrome inspector
// see how sue is an instance of Object
// it's __proto__ points to person.
console.log(sue.__proto__);   // person "defined above"
console.log(sue.hasOwnProperty('name')); // true

var bob  = Object.create(person, {name: "Bobby", age: 26});
console.log(bob.kind); // person
console.log(bob.name); // 'Bobby'
console.log(bob.age); // 26

