//STANDARD INPUT AND OUTPUT
//process.stdin & process.stdout are ways of communicating with a running process
var questions = [
  "What is your name?",
  "What is your surname?",
  "What do you do?"
];

var answers = [];

function ask(i) {
  //Standard output
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write("   >   ");
}

//Standard input
process.stdin.on("data",function(data){
  //process.stdout.write("\n" + data.toString().trim() + "\n");
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {

    //Quits the process
    process.exit();
  }
});

process.on("exit",function(){
  process.stdout.write("******************\n");

  process.stdout.write(`${answers[0]} ${answers[1]} ${answers[2]} \n\n`);

  process.stdout.write("******************\n");
});


ask (0);
