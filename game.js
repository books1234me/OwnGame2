class Game{
    constructor(){
    }
    getGameState(){
        db.ref("gameState").on("value",function(data){
            gameState=data.val();
        });
        }
    updateGameState(state){
        db.ref("/").update({
            gameState:state
        });
    }
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        player1 = createSprite(100,100)
        player2 = createSprite(300,100)
    }
    play(){
        form.hide()
        drawSprites();
    }
}