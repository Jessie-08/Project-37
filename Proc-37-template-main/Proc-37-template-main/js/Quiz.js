class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
   //write code to change the background color here
    background("yellow")
     
    //write code to show a heading for showing the result of Quiz
      textSize(30)
      fill("black")
      text("Result of The Quiz",550,50)
      text(" _ _ _ _ _ _ _ _ _ ",550,55)

//call getContestantInfo( ) here



Contestant.getPlayerInfo();
 

if(allContestants==!undefined){

  fill("blue");
  textSize(25);
  text("*NOTE: Contestant who answered correct are highlited in Green Colour!", 150, 300);
}

for(var plr in allContestants){
var correctAns = "2";
if(correctAns === allContestants[plr].answer){
 fill("green");
 text(allContestants[plr].name+": "+allContestants[plr].answer,300,340);
// text("hi",300,300)
}
else{
   fill("red");
  text(allContestants[plr].name+":"+allContestants[plr].answer,300,380);
  // text("bye",400,400)
}


}
}
}
