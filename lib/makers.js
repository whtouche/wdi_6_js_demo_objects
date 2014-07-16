var honda = {
  name: 'Honda',
  establishedDate: '2010-05-11',
  address: firstAddress,
  display: function(){
    return this.name + "\n" + this.establishedDate + "\n" + firstAddress.display();
  }
};

var buick = {
  name: 'Buick',
  establishedDate: '1984-05-11',
  address: secondAddress,
  display: function(){
    return this.name + "\n" + this.establishedDate + "\n" + secondAddress.display();
  }
};
// Create a couple of car makers in lib/makers.js
// Properties are name, established date and address (use one of the addresses created above for this property).
// Methods are display. This returns a string.
