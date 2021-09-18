
var rulesimg
var room1_img
var playerimg
var play
var gameState= "rules"
function preload(){
   rulesimg=loadImage("rulesimg.jpg");
    room1_img=loadImage("room1img.jpg")
    playerimg_running=loadAnimation("walk1.png","walk2.png","walk3.png","walk4.png","walk5.png")
    player_standing=loadAnimation("walk3.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  play = createButton("PLAY")
  play.position(width/2,height-200);
  play.mousePressed(() => {
    gameState="level1"
    play.hide()
  });

  player= createSprite(400,200);
  player.addAnimation("running",player_standing);
  player.addAnimation("running",player_standing);
  player.visible= false
  player.scale =0.09;

  if(keyIsDown(UP_ARROW)){
    this.playerMoving= true;
    player.positionY+=10
    player.update()
  }
  if(keyIsDown(LEFT_ARROW)){
    player.positionX-=10
    player.update()
  }
  if(keyIsDown(RIGHT_ARROW)){
    player.positionX+=10
    player.update()
  }
  
}

function draw() {
  background(255,255,255);
  if(gameState==="rules"){
    image(rulesimg,0,0,width,height);
  }
  if(gameState==="level1"){
    image(room1_img,0,0,width,height);
    player.visible= true
  }
 
    drawSprites();
}