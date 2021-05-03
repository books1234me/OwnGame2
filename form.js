class Form{
    constructor(){
        this.title = createElement("H2")
        this.input = createInput("type name here")
        this.button = createButton("Press")
        this.greeting = createElement("H3")
    }
    hide(){
        this.button.hide()
        this.input.hide()
        this.title.hide()
        this.greeting.hide()
    }

    display(){
        this.title.html("Circles")
        this.title.position(500,100)
        this.input.position(500,200)
        this.button.position(500,250)
        this.button.mousePressed(()=>{
            this.button.hide()
            this.input.hide()
            player.name = this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateData()
            this.greeting.html("Hello "+player.name)
            this.greeting.position(500,500)
        })
    }
}