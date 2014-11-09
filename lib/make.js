//Maker factory
var createMaker = function(name, establishedDate, address) {
  var display = function() {
    return this.name + "\n" + this.establishedDate + "\n" + firstAddress.display();
  };
  return {
    name: name,
    establishedDate: establishedDate,
    address: address,
    display: display
  };
};
