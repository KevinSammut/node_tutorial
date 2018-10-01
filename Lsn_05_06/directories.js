var fs = require("fs");

// fs.renameSync("./assets/logs", "./logs");
//
// console.log("Direcotry moved");


// fs.rmdir("./assets",function(err){
//   if (err) {
//     throw err;
//   }
//   console.log("Directory assets removed.")
// });

fs.readdirSync("./logs").forEach(function(fileName){
  fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs",function(err){
  if (err) {
    throw err;
  }
  console.log("Directory logs removed.")
});
