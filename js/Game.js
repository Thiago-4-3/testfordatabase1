class Game {
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

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
 form.hide();
 textSize(30)
 text("GameStart",120,100);
 Player.getPlayerInfo(allPlayers);
 if(allPlayers !== undefined)
 { var display_position = 130; 
  for(var i in allPlayers)
  { if (i === "player" + player.index) 
  fill("red") 
  else fill("black"); 
  display_position+=20; 
  textSize(15);
   text(allPlayers[i].name + ": " + allPlayers[i].distance, 120,display_position) } }   
  if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance+=50;
player.update();
  }
  }
}
