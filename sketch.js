var game,player,form
var gameState=0;
var playerCount;
var position, database;
function setup(){
    database=firebase.database();

    createCanvas(400,400);
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    
}

