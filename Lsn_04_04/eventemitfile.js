var Person = require('./lib/Person.js');

var person1 = new Person("John");
var person2 = new Person("Jane");

person1.on('speak', function (said) {
  console.log(`${this.name} said ${said}`);
});

person2.on('speak', function (said) {
  console.log(`${this.name}: ${said}`);
});

person1.emit('speak', "This is what I said");
person2.emit('speak', "I said something as well");
