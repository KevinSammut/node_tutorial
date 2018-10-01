var readline = require("readline");

//Create instance, which will create a prompt, passing a standard input and output
var rl = readline.createInterface(process.stdin,  process.stdout);

var realPerson = {
  name: '',
  sayings: []
}


rl.question("What is you name? ", (answer) => {
  realPerson.name = answer;
  rl.setPrompt(`What would ${realPerson.name} say? `);
  rl.prompt();

  rl.on('line', (saying) =>  {

    if (saying.toLowerCase().trim() === 'exit') {
        rl.close();
    } else {
        realPerson.sayings.push(saying.trim());
        rl.setPrompt(`What else would ${realPerson.name} say? ('exit' to leave) `);
        rl.prompt();
    }


  });

});

rl.on('close', () => {
    console.log("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});
