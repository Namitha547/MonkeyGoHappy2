
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var BananaGroup, obstacleGroup,ground,back,banana,obstacle;
var score;
var PLAY=1;
var END=0;
var gameState=PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  BackImage=loadImage("forest.jpg");
  
 
}



function setup() {
 createCanvas(400,400);

back=createSprite(200,200,20,20);
back.addImage(BackImage);
back.scale=3.0;

ground=createSprite(200,300,600,10);
  
monkey=createSprite(80,285,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;


obstacleGroup=new Group();
BananaGroup=new Group();
  
monkey.debug=false;


score=0;
}
  
function draw(){
 background("white");
if(gameState===PLAY){
  if(keyDown("space")){
monkey.velocityY=-12;
}
  
monkey.velocityY=monkey.velocityY+0.8;
back.velocityX=-3; 
if (back.x<0){
back.x = back.width /2;  
}
  
if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       }
  
if (monkey.isTouching(BananaGroup)){
 BananaGroup.destroyEach(); 
  monkey.scale=monkey.scale+0.01;
}
score = score + Math.round(getFrameRate()/60); 
  
if(monkey.isTouching(obstacleGroup)){
monkey.scale=monkey.scale-0.01;
gameState=END;
}
}

if(gameState===END){
  score=0;
  obstacleGroup.setLifetimeEach=(-1);
   BananaGroup.setLifetimeEach=(-1);
 back.velocityX=0;
 obstacleGroup.velocityX=0; 
}

  

  


  
monkey.collide(ground);


drawSprites(); 
fill("black");
textSize(12)
text("Survival Time:"+score,150,70);
spawnbanana();
spawnobstacles();
}

function spawnbanana(){
if (frameCount % 150===0) {
banana=createSprite(380,150,20,20);
banana.addImage(bananaImage);
banana.scale=0.1;
banana.velocityX=-3;
BananaGroup.add(banana);
}
}

function spawnobstacles(){
if(frameCount % 300===0){
obstacle=createSprite(380,280,5,5);
obstacle.addImage(obstacleImage);
obstacle.scale=0.1;
obstacle.velocityX=-3;
obstacleGroup.add(obstacle);
} 
}





