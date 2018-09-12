
var path = require("path");

//Util module still prints to console, but adds a timestamp
var util = require("util");
var v8 = require("v8");

util.log( path.basename(__filename) );

var dirUploads = path.join(__dirname,"www","files","uploads");
util.log(dirUploads);


util.log(v8.getHeapStatistics());
