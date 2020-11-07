var player,player_running;
var foodGroup,foodimg;
var obstacleGroup,obstacle_img;
var score;
var backimg,jungle;
var invisibleGround;

function preload(){
 backimg=loadImage("jungle.jpg");
 player_running=
loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
foodimg=loadImage("banana.png");
obstacle_img=loadImage("stone.png");
  
  }
function setup() {
  createCanvas(400, 400);
  backimage=createSprite(400,400,20,20);
  backimage.addImage("background", backimg);
  backimg.velocityX=-2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  var player=createSprite(97,342,10,10);
player.addAnimation("monkey",player_running);
  player.scale=0.2;

  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}

function draw() {
  background(220);
  
  if (backimg.x<0) {
 backimg.x=backimg.width/2; 
}
  
  if(foodGroup.isTouching(player)){
    foodGroup.destroyEach();
    score=score+2;
    }
  
  switch(score){
      case 10 : player.scale=0.12;
              break;
      case 20 : player.scale=0.14;
              break;
      case 30 : player.scale=0.16; 
              break;
      case 40 : player.scale=0.18;
              break;
      default:break;
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale=0.2;
  }
  
 drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,200,50)
  
}