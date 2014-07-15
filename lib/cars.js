var ltd69 = {
  model: 'LTD',
  maker: ford,
  year: 1969,
  price: 125.00,
  display: function(){
    return this.year + " " + this.maker.name + " " + this.model;
  }
};


var camry2014 = {
  model: 'Camry',
  maker: toyota,
  year: 2014,
  price: 25000.00,
  display: function(){
    return this.year + " " + this.maker.name + " " + this.model;
  }
};

var sierra2009 = {
  model: 'Sierra',
  maker: toyota,
  year: 2009,
  price: 19500.00,
  display: function(){
    return this.year + " " + this.maker.name + " " + this.model;
  }
}
