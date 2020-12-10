var gameState = 0
var playerCount
var form1,player1,game1
var database

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game1 = new game()
    game1.getState()
    game1.start()
}

function draw(){
    background("white");
    
    drawSprites();
}

