var food
var bananaImage
var player, game, form
var db, gameState=0, playerCount
var player1, player2
function preload(){
  //bananaImage = loadImage("bananaSprite.png")  
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  db = firebase.database()
  //food = new Group()
  //player = new Player()
  game = new Game()
  game.getGameState()
  game.start()
}

function draw() {
  //background(255,255,255);
  //if(frameCount%20 === 0){
    //spawnFood();
  //} 
  /*if(food !== undefined){
    for(var i in food){
      if(food.get(i).isTouching(player)){
        score = score+1
        food.get(i).destroy();
      }
    }
  }*/
  //drawSprites();
  //text("score: "+player.score,100,100)
  if(playerCount===2){
    game.updateGameState(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
}
function spawnFood(){
  var banana = createSprite(400,200,10,10)
  banana.addImage("banana",bananaImage)
  banana.scale = 0.5
  banana.x = random(0,windowWidth);
  banana.y = random(0,windowHeight);
  banana.lifetime = 100
  food.add(banana)
}
 function keyPressed(){
  if(keyCode === UP_ARROW){
    player.body.y = player.body.y-10
  }
  if(keyCode === DOWN_ARROW){
    player.body.y = player.body.y+10
  }
  if(keyCode === RIGHT_ARROW){
    player.body.x = player.body.x+10
  }
  if(keyCode === LEFT_ARROW){
    player.body.x = player.body.x-10
  }
}