var canvas;
var gameState=0;
var constantCount;
var database;
var quiz;
var question;
var contestant;
var allcontestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
    } 
    if(gameState === 1){
       clear();
        quiz.play();
        }
  
}
