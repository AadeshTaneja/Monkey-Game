var backImage,banana,score,obstacle_image,obstaclegroup,player_running,    backimage,player,invisibleground,gameState,touchscore,over,gameover,sound

function preload(){
backImage=loadImage("jungle.jpg");
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
banana_img=loadImage("banana.png");
obstacle_image=loadImage("stone.png");
  over=loadImage("over.jpg")


}





function setup() {
  createCanvas(400, 400);
 
  backimage = createSprite(200,200,200,400);
  backimage.addImage("background",backImage);
  backimage.velocityX=-3
  backimage.x=backimage.width/2
  
  player= createSprite(70,370 )
  player.addAnimation("player",player_running);
  player.scale=0.1
  
  obstaclegroup= new Group();
  bananagroup = new Group();
  
  invisibleground=createSprite(200,405,400,10)
  invisibleground.visible=false;
  
  gameover = createSprite(200,200,400,400)
  gameover.addImage("over",over)
  gameover.visible=false;
  
  score=0
  touchscore=2

gameState=1


}

function draw() {
  background("white")
  
   spawnbanana();
  spawnobstacle();
  

 if(keyDown("space")){
      player.velocityY=-12;
   }

      player.velocityY=player.velocityY+0.8;
 
 
  
  
  if(backimage.x<0){
   backimage.x=backimage.width/2
  }
 
  if(bananagroup.isTouching(player)){
   score=score+2;
    bananagroup.destroyEach();
   switch(score){
   case 10: player.scale=player.scale+0.12
       player.x=100        
  break;
  case 20: player.scale=player.scale+0.1 
           player.x=130
  break;
   case 30: player.scale=player.scale+0.16
       player.y=160  
  break;
   case 40: player.scale=player.scale+0.18 
            player.x=190 
  break;
   case 50: player.scale=player.scale+0.205 
            player.x=210 
     break;  
     case 60: player.scale=player.scale+0.21
            player.x=210 
     break;  
     case 70: player.scale=player.scale+0.215
            player.x=210 
     break;  
     case 80: player.scale=player.scale+0.2 
            player.x=210 
     break; 
     case 90: player.scale=player.scale+0.2 
            player.x=210 
     break;  
     case 100: player.scale=player.scale+0.2 
            player.x=210 
     break;  
     
 
  default:break;
   
  }
   
  }
  
  
  
  if(obstaclegroup.isTouching(player)){
    player.scale=0.1
    obstaclegroup.destroyEach();
    player.y=375
    touchscore=touchscore+1
    
  
  }
 
  if(touchscore>=4){
  gameState=2
    bananagroup.destroyEach();
     obstaclegroup.destroyEach();
             obstaclegroup.setVelocityEach(10,10);
             bananagroup.setVelocityEach(10,10);
  }
  
  
  player.collide(invisibleground)
  
  drawSprites();
 
   if(gameState===2){
  
     
     gameover.visible=true
    

     
    
  
   
           
   backimage.velocityX=0;
  // gameover.visible=true;
 //  gameover.scale=1
    
       
   
   }

 
  
  textSize(24)
  stroke("white")
  fill("white")
  text("Score: "+score,270,30)

}


function spawnobstacle(){
if(frameCount % 150 === 0 ){
var obstacle = createSprite(400,370);
  obstacle.velocityX=-6
obstacle.addImage("obstacleimg",obstacle_image);
  obstacle.scale=0.15;
  obstacle.velocityX=-6;
  obstacle.lifetime = 70;
  obstaclegroup.add(obstacle);


}
   
}

function spawnbanana(){
if(frameCount % 80 === 0 ){
var banana = createSprite(400,370);
   banana.velocityX=-6
banana.addImage("banana",banana_img);
  banana.scale=0.09;
  banana.velocityX=-6;
  banana.lifetime = 70;
  bananagroup.add(banana);


}
   


}