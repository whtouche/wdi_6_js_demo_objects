var bostonOffice = {
  street: '51 Melcher St.',
  city: 'Boston',
  state: "MA",
  country: "US",
  display: function(){
    return this.street + ", " + this.city + " " + this.state + ", " + this.country;
  }
};

var detroitOffice = {
  street: '6 Elm St.',
  city: 'Detroit',
  state: "MI",
  country: "US",
  display: function(){
    return this.street + ", " + this.city + " " + this.state + ", " + this.country;
  }
};

var tokyoOffice = {
  street: '34 Main St.',
  city: 'Tokyo',
  state: '',
  country: "Japan",
  display: function(){
    return this.street + ", " + this.city + " " + this.state + ", " + this.country;
  }
};