var Ghost,GhostImage;
var Tower,TowerImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var Door,DoorImage;
var left,right,lefrImage,RightImage;
var DoorGroup;

function preload(){
  GhostImage = loadImage("b.png");
  TowerImage = loadImage("ro.png");
  DoorImage = loadImage("door.png");
  leftImage = loadImage("Larrow.png");
  RightImage = loadImage("Rarrow.png");
}



function setup(){
createCanvas(600,600);
  Tower = createSprite(300,300);
  Tower.addImage(TowerImage);
  Ghost = createSprite(300,500);
  Ghost.addImage(GhostImage);
  left = createSprite(120,480);
  left.addImage(leftImage);
  right = createSprite(480,480);
  right.addImage(RightImage);
  Ghost.scale = 0.8
  Ghost.setCollider("circle",0,0,20)
  Tower.scale = 2.9
  right.scale = 0.2
  left.scale = 0.2
  Tower.velocityY = 5;
  DoorGroup = new Group();
}

function draw(){
background("black");
  
Ghost.setcollider

  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    Ghost.x = Ghost.x -5;
  }
  if (keyDown("right_arrow")){
    Ghost.x = Ghost.x +5;
  }
  doors();
  if (Tower.y>400){
    Tower.y = 200;
  }
    if (mousePressedOver(right)) {
    ( Ghost.x = Ghost.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( Ghost.x = Ghost.x -5);
    }
  if(DoorGroup.isTouching(Ghost)||Ghost.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("red");
     textSize(60);
     fill("white");
     stroke("Black");
     text("GAME OVER",120,320)
  }
  
}

function doors(){
  if (frameCount % 100 ==0 ){
    Door = createSprite(Math.round(random(100,500)),-50)
    Door.addImage(DoorImage);
    Door.velocityY = 6;
    Door.scale = 0.10
    Door.lifetime = 250;
    Door.depth = Ghost.depth
    Ghost.depth +=1 ;
    DoorGroup.add(Door);
  }
}
