class Game{
constructor(){


}

start(){
form = new Form();
form.display();



player=createSprite(683,100,10,10);
player.addImage(playerImg);
player.scale=0.4;
enemy1=createSprite(683,400,10,10);
enemy1.addImage(enemyImg);
enemy1.scale=0.4
enemy2=createSprite(983,400,10,10);
enemy2.addImage(enemyImg);
enemy2.scale=0.4
enemy3=createSprite(383,400,10,10);
enemy3.addImage(enemyImg);
enemy3.scale=0.4
border1=createSprite(50,405,5,830);
border1.shapeColor= "black"
border2=createSprite(1310,405,5,830);
border2.shapeColor= "black"
border3=createSprite(683,590,1366,5);
border3.shapeColor= "black"
door1=createSprite(255,100,700,5)
door1.shapeColor="black"
door2=createSprite(1100,100,700,5)
door2.shapeColor="black"
}

play(){
    form.hide();

    player.velocityX=0;
    player.velocityY=0;    

    if(keyWentDown("o")&&direction===3){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=-10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("p")&&direction===2){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=10;
        bullet.velocityY=0; 
     }

     if(keyWentDown("k")&&direction===4){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=10; 
     }

     if(keyWentDown("l")&&direction===1){
        bullet=createSprite(player.x,player.y,4,4)
        bullet.shapeColor="black"
        bullet.velocityX=0;
        bullet.velocityY=-10; 
     }
    if(keyIsDown(DOWN_ARROW)){
       player.rotation=0
       player.velocityX=0;
       player.velocityY=5;
       direction=4
      }
     

      if(keyIsDown(UP_ARROW)){
        player.rotation=180
        player.velocityX=0;
        player.velocityY=-5;
        direction=1;
       }
       
       if(keyIsDown(RIGHT_ARROW)){
        player.rotation=270
        player.velocityX=5;
        player.velocityY=0;
        direction=2
       }

       if(keyIsDown(LEFT_ARROW)){
        player.rotation=90
        player.velocityX=-5;
        player.velocityY=0;
        direction=3
       }
         drawSprites();  
}
}