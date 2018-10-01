var exec = require('child_process').exec;

//exec("open http://google.com");

//exec("open -a Terminal .");

exec("git version", function(err, stdout){
  if (err) {
    throw err;
  }
  console.log("Getting Git version....");
  console.log(stdout);
});
