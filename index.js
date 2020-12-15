var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + "!!! \n");
console.log("Let's play How Well DO YOU KNOW PRANSHU!!! \n");

var score = 0;

var highScores = [{
  name: "Pranshu",
  score: 3
},
{
  name: "Sunita",
  score: 3
}];

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Correct!");
    score = score + 1;
  } else{
    console.log("Wrong!");
  }
  console.log("Current Score: " + score);
  console.log("-----------------");
}


var questions = [{
  question: "Where do I live? ",
  answer: "Delhi"
},
{
  question: "Where do I work? ",
  answer: "Infosys"
},
{
  question: "What is my favourite movie? ",
  answer: "Hera Pheri"
}];


for(var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question,currentQuestion.answer);
}

console.log("\n Yayy!! You have scored: ", score);

console.log("\n-----Leaderboard-----");
console.log("Name \t Score");
for(var i=0;i<highScores.length;i++){
  console.log(highScores[i].name + " \t " + highScores[i].score);
}