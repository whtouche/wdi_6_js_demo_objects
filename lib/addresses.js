var firstAddress = {
  street: '11 Sterling St.',
  city: 'Somerville',
  state: 'MA',
  country: 'USA',
  display: function(){
    return this.street + "\n" + this.city + ", " + this.state + " " + this.country;
  }
};

var secondAddress = {
  street: '7 Montclair Dr.',
  city: 'North Attleboro',
  state: 'MA',
  country: 'USA',
  display: function(){
    return this.street + "\n" + this.city + ", " + this.state + " " + this.country;
  }
};
// Create a couple addresses in lib/addresses.js.
// Properties are street, city, state and country.
// Methods are display. This returns a string.
