var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var fs = require("fs");
var path = require("path");

var realPerson = {
	name: '',
	sayings: []
};


rl.question("Enter name of file you want to delete ", function(name) {

  var file = path.join(__dirname, `${name}.md`);
  if (fs.existsSync(file)) {

    fs.unlink(file, function(err) {
      if (err) {
        throw err;
      }
      console.log("File was deleted");
      process.exit();
    });

  } else {

    console.log("File does not exist");
    process.exit();
  }


});
