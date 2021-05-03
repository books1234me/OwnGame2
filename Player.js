class Player{
    constructor(){
        this.name = null
        this.index = null
        this.score = 0
    }
    getCount(){
        db.ref("playerCount").on("value",function(data){
            playerCount=data.val();
        });
        }
    updateCount(count){
        db.ref("/").update({
            playerCount:count
        });
    }
    updateData(){
        db.ref("players/player"+this.index).update({
            name:this.name,score:this.score
        })
    }
}