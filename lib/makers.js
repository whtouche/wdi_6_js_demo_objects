var ford  = {
  name: 'Ford',
  est: 1903,
  address: detroitOffice,
  display: function(){
    return this.name + " was established in " + this.est + ". Address is " + address.display();
  }
};

var toyota  = {
  name: 'Toyota',
  est: 1953,
  address: tokyoOffice
};


var gm = {
  name: 'General Motors',
  est: 1911,
  address: bostonOffice,
   display: function(){
    return this.name + " was established in " + this.est + ". Address is " + address.display();
  }
}