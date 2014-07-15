## Object Oriented Javascript 

## Objectives

* Know how Javascript is standardized.
* Know the difference between Primitive Types and Objects.
* Know what is a reference type and how it behaves.
* Learn about the most common ways to create Javascript Objects.
* Learn about Prototypes and Prototypical Inherintence.



## ECMAScript
ECMAScript is the standardization of Javascript.

[ECMAScript Versions](http://en.wikipedia.org/wiki/ECMAScript#Versions)

We are going to use ECMAScript Version 5. There are a lot of new features coming in ECMAScript 6 but many are not available in current browsers.


[WhatBrowser](http://whatbrowser.org)

[ECMAScript 5 Compatability](http://kangax.github.io/compat-table/es5/)

[ECMAScript 6 Compatability](http://kangax.github.io/compat-table/es6/)

## Primitives
Unlike Ruby, in Javascript everything is __NOT__ an Object. Some values a so basic they don't require the overhead and complexity that are built into Objects. 

These are [Primitives](http://goo.gl/plsE6x), aka Primitive Types. And they are simple atomic pieces of data. These are accessed by __value__. Where objects are accessed by _reference_. (More later).

In JavaScript, there are 6 primitive data types:

* string
* number
* boolean
* Null
* undefined
* Symbol _(new in ECMAScript 6)_

### [Primitive Wrapper Objects](PrimitiveWrappers.md)

Some of the javascript primitives have corresponding objects, i.e. wrappers. We are going to avoid the use of these. But, [Here is More Info](PrimitiveWrappers.md) about how primitives work with wrappers.

* String for the string primitive.
* Number for the number primitive.
* Boolean for the Boolean primitive.


## Built-in Objects
* [Object](http://goo.gl/cjziB)
* [Array](http://goo.gl/aeeZI)
* [Function](http://goo.gl/7GVB3)
* [Date](http://goo.gl/DaGfQ)
* [RegExp](http://goo.gl/6e7TJ)
 
[Built-in Objects](http://goo.gl/jvqc2d)


## No Classes in Javascript.

Javascript has no concept of classes. _At least not yet, they are coming in ECMAScript 6_. 

But, it does provide a way to create structures that behave like classes. We'll see the few ways that we can create a _"class"_ in javacript. 

## Object Literals.

And Object literal is the simplest way to create an object in javacript. It looks and behaves somewhat like a Ruby hash but has some key differences.


__Create a file lib/simple.js with the below code and reference it from index.html.__

```
// Create an Object literal representing one person.
var joe = {
  name: "Joe Smoe",
  age: 23,
  // Property value is a function
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
}

console.log("Hey " + jill.name +  " where you going with that gun in your hand");
console.log("Hey " + joe.name + " are you really " + joe['age'] + " years old?");

```

An Object Literal:

* Has properties.
* Each property has a name and a value, name/value pairs.
* A property is typically a string, but can be it can be a number _(rare)_.
* A value can be a __Primitive__ or an __Object__, aka reference type.
* A value can be a __function__. We call these properties methods.
* A value can be based on the built-in Object, see above, or a user defined object.  
* By default is based on the build in Javascript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).  


__Inspect joe and jill in Chrome.__

### Object Literals with object properties.

Object literals can have properties that are objects.

__Create a file lib/simple_address.js with the below code and reference it from index.html.__

```
var jill = {
  name: "Jill Smill",
  age: 32
};
var fred = {
  name: "Fred Smoe",
  age: 27
};

// Objects can have objects.
// The siblings property's value is an Array
// The address property's value is a Object literal.
// The describe property's value is a Function, which is also an object.
var joe = {
  name: "Joe Smoe",
  age: 23,
  occupation: "Software Developer", 
  siblings: [
	jill,
	fred,
  ], 
  address: {
	street: '44 Warren St.',
	city: 'Stoneham',
	state: 'MA',
	zip: 01345,
	display: function(){
	   return this.street + " " + this.city + ", " + this.state;
	}
  },
  describe: function(){
	return this.name + " is " + this.age + " years old";
  }
};

console.log(joe.name + "'s address is: " + joe.address.display());

// Show all the properties and their value.
for(var prop in joe){
  console.log(joe.name + " property = " + prop + ", value is " + joe[prop]);

}

```

__Inspect joe and jill in Chrome.__



### Objects properties and methods can change anytime.

Here we are pointing the the joe object literal's describe property at another function.


__Append the below code to lib/simple_address.js.__

```
// Can change the describe function later, at runtime.
// by setting the describe property
joe.describe = function(showDetail){
  var info;
  if(showDetail){
    info = this.name + " age is " + this.age + ", address is: " + this.address.display();
  }else{
    info = this.name + " is " + this.age + " years old";
  }
  return info
};

// describe joe.
console.log(joe.describe(true));

// describe joe in detail
console.log(joe.describe(false));

```

### Use Object Literals for objects that are only created once.

What if we want to create a lot of people? 

We will have to create lots of object literals and each time a property or method changes we'll have to change each object literal in the program. _Makes maintainence very difficult and the code not DRY_

For example, we want to change each person to have an occupation
that is shown in the describe function?

Use Object literals for instances that will exist only once, Singletons, in your application. For example, CarLot or RecordCompany.

Later, we will see how to emulate a class in Javascript that will be used to creates instances, objects, of something.

## LAB

__Create a couple of Cars in the lib/cars.js file. Each Car will have a Make, model and year. The make property of a car will be a property were the value is an object literal defined elsewhere in the file lib/makes.js.__

__The Make will also have a home address property defined in the file lib/addresses.js.__

_Note: you will have to create a cars.html that will use each of the above js files_

```
 ...
 <script src='lib/addresses.js'>
 <script src='lib/makes.js'>
 <script src='lib/cars.js'>
 ... 
```
 
## Reference Data Type and Primitive Data Types
One of the main differences between reference data types, Objects, and primitive data types is reference data type’s value is stored as a reference, it is not stored directly on the variable, as a value, as the primitive data types are.

_This is different than Ruby, were everything is stored by reference. But, similar to Java._

##### Primitives are "Stored by Value"

```
var valuePerson = "Jane";  
var valueAnotherPerson = valuePerson; // anotherPerson = the value of person
valuePerson = "Joe"; // value of person changed

console.log(valueAnotherPerson); // Jane
console.log(valuePerson); // Joe

```

##### Objects are "Stored by Reference"

```
// Stored by Reference
var refPerson = {name: "Jane"};
var refAnotherPerson = refPerson;
refPerson.name = "Joe";

console.log(refAnotherPerson.name); // Joe
console.log(refPerson.name); // Joe
```

__Step through lib/stored_by.js and notice the difference between stored by value and stored by value.__


![Pass by Value and Reference](javacript_pass_by_ref.png)

1. __Run and step through the stored_by.js file.__

## Object Creation Patterns.

The problem with Object Literals is that they can get very tedious. For example, if we have to create a new object literal for each Person and there are many people. 

Or I may want to add a property or change a method for a person then I MUST do this for every single person in the app!

__Use Object Literals for objects that are only created once.__

Let's look at some ways we can create Objects.

* Factory Pattern
* Constructor Function
* ECMAScript 5 Object.create


### The Factory Pattern.

The Factory Pattern will use a function to create object literals. The arguments to the factory function will be used to initialize and set the object being created. 
  
__Create a file lib/object_factory.js with the below code and reference it from index.html.__


```
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
```


* Good so you can DRY up the creation of similar objects and save lines of code.	
* Factory Function is __NOT__ a constructor function.  
* It creates a new sayHi function for every instance, __not good!__  
* Don't use Factory function to create just one object, overkill.  


## LAB
__Create a couple of Cars using the factory pattern in the lib/car_factory.js. Each Car will have a Make, model and year. The Make property of a car will be a property were the value is an object also created by a factory defined elsewhere in the file lib/make_factory.js.__

__The Make will also have a home address property that is also created with a factory defined in the file lib/address_factory.js.__


### The Constructor Function Pattern.

This is the most common way to create objects in Javascript. It's the most common way to implement Classes. This pattern is used with the javascript _new_ keyword to create objects.

Many environments, including browsers, are optimized to use this kind of constructor. The *convention* is to uppercase the first name of a function that will be used as a constructor.


__Create a file lib/constructor_function.js with the below code and reference it from index.html.__


```
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
```


Whats happening when we call _new_ on a Constructor function?

1. A new object literal is created for the new object and it's pointed to by the _this_ pointer.
2. Another new object literal is created and pointed to by the prototype property.
3. The body of the Constructor Function is executed.
4. The _this_ pointer is implicitly returned. Unless you explicitly return something else.

__Break in the debugger after we create joe. Look at the proto property.__

What is that prototype property?.


##### Property Lookup and the Prototype.

Every Object will have a prototype property. It will point to another object that we used to look up properties. 

Initially, the object being pointed to will be an empty object, {}. You can set a property of a prototype.

Javascript uses the prototype method to implement property/method lookup and inheritance.

When you access a property, or method, on an Object Javascript will:

1. Look for the property, which may be a method, on the object.
2. Look for the property in the object's prototype.
3. Recursively, look for each property in the successive _parent_ prototypes.


## LAB
__Create a couple of Cars using the Constructor function defined in the lib/car.js. Each Car will have a Make, model and year. The Make property of a car will be a property were the value is an object also created by a constructor function elsewhere in the file lib/make.js.__

__The Make will also have a home address property that is also created with a constructor function defined in the file lib/address.js.__


### Object.create

ECMAScript 5 defined a new way to create an object. Object.create(...).

You will be seeing this more as time goes on and developers make use of this. For now, we will be using the Constructor Function to create objects.

__Create a file lib/object_create.js with the below code and reference it from index.html.__

```
// Define a person
var person = {
	kind: 'person',
};

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


```

## LAB
Watch [Object Playground](http://www.objectplayground.com/)



## Summary.

* Javascript is standardized by ECMAScript. Currently we are using ECMA 5, but ECMA 6 is right around the corner with new functionality.
* Primitves Types are built-in and atomic.
* Some Primitves Types have object wrappers.
* Primitive Types are assigned to variables and properites by value.
* Reference Types, Objects, are assigned to variables and properties by reference.
* Object Literals are somewhat like Maps or Hashes in other languages.
* Object Literals should only be used when you ONLY need one instance of an object.
* Creating Objects with the Factory Pattern, or Factory method.
* Creating Objects with the new keyword and Constructor functions. __USE THIS METHOD__
* Creating Objects with Object.create(...).
* Most prevalant way to create objects is with the 'new' keyword and Constructor Functions.
* Learn about Prototypes and Prototypical Inheritance.
* Learn about property and method lookup.



