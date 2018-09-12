//GLOBAL TIMING FUNCTIONS

var waitTime = 3000;
var currentTime = 0;
var waitInterval = 20;
var percentWaiting = 0;
function writeWaitingPercentage(p) {
  //Clear last line in terminal
  process.stdout.clearLine();
  //Move cursor
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting...${p}%`)
}

var interval = setInterval(function(){
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/waitTime)*100);
  writeWaitingPercentage(percentWaited);


},waitInterval)

setTimeout(function(){
  clearInterval(interval);
  writeWaitingPercentage(100);
  console.log("ready");
},waitTime);
process.stdout.write("*******************")
writeWaitingPercentage(0);
