var fs = require("fs");

//Async function with a callback function
var files = fs.readdir('./lib', function(err, files){
  if (err) {
    throw err;
  }
  console.log(files);
});

console.log("Reading Files.....")
//var files = fs.readdirSync('./lib');
