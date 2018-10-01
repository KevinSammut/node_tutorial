var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, EventEmitter);

var person1 = new Person("John");

person1.on('speak', function (said) {
  console.log(`${this.name} said ${said}`);
});

person1.emit('speak', "This is what I said");
