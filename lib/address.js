var createAddress = function(street, city, state, country){

  var display = function(){
   return this.street + ", " + this.city + " " + this.state + ", " + this.country;
  };

  return {
    street: street,
    city: city,
    state: state,
    country: country,
    display: display
  }
};