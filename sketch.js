//Creating Variables
var bg,bgI;
var bg3;
var gameState="START";
var bgg;
var oGroup;
var score=0;
//download png image for button
function preload(){
  //Loading Images 
  bgI = loadImage("HAUNTED HOUSE PIC (1).jpg");
  bg2 = loadImage("BG 1.jpg");
  bg3 = loadImage("BG 3.jpg");
   bg4 = loadImage("BG 4.jpg");
 bg5 = loadImage("BG 2.jpg");
  bg6 = loadImage("GAME OVER-1.jpg");
  o1P = loadImage("o1.png");
  o2P = loadImage("o2.png");
   o3P = loadImage("o3.png");
   o4P = loadImage("o4.png");
  stoneP = loadImage("5a38e04bbc58b7.26778809151367687577158258.png");
 c = loadAnimation("1.png","2.png","3.png","4.png","5.png");
  
}
function setup(){
  //Creating Canvas
 createCanvas(400,200);
  //Creating Sprite To Add Background Images
 bg = createSprite(200,100);
 bgg = createSprite(200,100); 
  bgg.addImage(bg3);
  bgg.scale=0.2;
  bgg.visible = false;
  //Creating A Ground 
  groundI = createSprite(10,160,800,10);
  groundI.visible=false;
  C1 = createSprite(25,130,10,10);
  C1.addAnimation("char",c);
  C1.scale=0.27;
  //Creating Groups
  obstacleGroup = createGroup();
  bulletGroup = createGroup();
  oGroup = createGroup();
}
function draw(){
  //Setting Background
  background(180);
  //Creating Levels
  if(gameState==="START"){
      bg.addImage(bgI); 
    bgI.resize(400,200);
   C1.visible=false;
   if(keyDown("space")) {
       bg.x=500;
     gameState="PLAY";
     C1.visible=true;
     }}
  else if(gameState==="PLAY"){
    obstacles();
    bg.addImage(bg2)
    bg.x=bg.x-2;
    bg.scale=0.45;
  if(C1.isTouching(oGroup)){
    gameState="END"; 
  }
 if(bulletGroup.isTouching(oGroup)){
    oGroup.destroyEach();
    bulletGroup.destroyEach();
   score=score+2;
    }
  if(bg.x<-200){
   // bg.x=500;
    bg.destroy();
    bgg.x=500;
    gameState="PLAY2";
  }
  }
  else if ( gameState === "PLAY2"){
     obstacles();
     if(C1.isTouching(oGroup)){
    gameState="END"; 
  }
    if(bulletGroup.isTouching(oGroup)){
    oGroup.destroyEach();
    bulletGroup.destroyEach();
       score=score+2;
    }
   bgg.visible=true;
bgg.x=bgg.x-2;
    bgg.scale=0.2;
    
    if(bgg.x<-400){
      bgg.x=500
     gameState="PLAY3";
    }
  } 
  else if (gameState==="PLAY3"){
     obstacles();
     if(C1.isTouching(oGroup)){
    gameState="END"; 
  }
    if(bulletGroup.isTouching(oGroup)){
    oGroup.destroyEach();
    bulletGroup.destroyEach();
       score=score+2;
    }
   bgg.addImage(bg4); 
    bgg.scale=0.8;
    bgg.x=bgg.x-2;
    console.log(bgg.x);
    if(bgg.x<-420){
      
     bgg.x=500
     gameState="PLAY4"; 
    }
    //if(something.isTOuching(gameStateEnd)){}
  } else if(gameState==="PLAY4"){
     obstacles();
     if(C1.isTouching(oGroup)){
    gameState="END"; 
  }
    if(bulletGroup.isTouching(oGroup)){
    oGroup.destroyEach();
    bulletGroup.destroyEach();
     score=score+2;
    }
  bgg.addImage(bg5); 
    bgg.scale=0.35;
    bgg.x=bgg.x-2;
    console.log(bgg.x); 
     if(bgg.x<-420){
     bgg.x=500
     gameState="END"; 
    }
  } else if(gameState==="END"){
   
    C1.destroy();
   
    var bb = createSprite(200,100);
    
    bb.addImage(bg6);
    bb.scale=0.65;
    
  }
  
  
  
  
   
  
  
   if(keyDown("b")){
   createbullet1();
   }
 
  drawSprites();
   stroke("white");
  fill("white");
  
  text("SCORE:" + score , 10,10);
  
}
function obstacles(){
  if(World.frameCount%75===0){
    stone = createSprite(400,160,20,20);
     var select_obstacle = Math.round(random(1,3));
  
   
    if (select_obstacle == 1) {
      stone.scale = 0.2;
   
      stone.addImage(o1P);
    } else if (select_obstacle == 2) {
   stone.scale = 0.1;
    stone.addImage(o2P);
    } else {
      stone.scale = 0.15;
    stone.addImage(o4P);
    }
    stone.y=Math.round(random(150,150));
    stone.velocityX = -6;
    stone.lifetime = 100;
    //stoneS = 0.02; o1P = 0.2; o2p = 0.1;
    
    oGroup.add(stone);
  }
  
}
function createbullet1() {
  var bullet= createSprite(44, 119, 10, 2);
 
 
 bullet.shapeColor="red";
  bullet.velocityX = 4;
  bullet.lifetime = 100;
  
   bulletGroup.add(bullet);
  return bullet;
   
}


