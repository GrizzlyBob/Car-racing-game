class form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("car racing game")
        title.position(130,0)
        var input = createInput("name")
        var button = createButton('Play')
        input.position(130,160)
        button.position(250,200)
        var greeting = createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount+=1
            player1.update(name)
            player1.updateCount(playerCount)
            greeting.html("Hello"+name)
            greeting.position(130,160)
        })
    }
}