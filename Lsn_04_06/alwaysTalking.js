var sayings = [
  "Suspendisse pharetra sapien ut nisl lobortis euismod.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed venenatis purus ac tincidunt porttitor.",
  "Sed quis vestibulum urna.",
  "Suspendisse vel posuere enim. Curabitur rhoncus non lorem sed venenatis.",
  "Fusce in mauris pretium, tempor sapien vitae, hendrerit lacus."
];

var interval = setInterval(function(){
  var i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
  console.log(`STDIN Data Received -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
})
