var bg,bgImg;
var sleep,sleeping;
var brush,brushing;
var gym,gymimg;
var eat,eating;
var drink,drinkimg;
var move,moveimg;
var astro,astroImg;
var bath;

function preload(){
  bgImg= loadImage("iss.png");
  sleep= loadAnimation("sleep.png");
  brush= loadAnimation("brush.png");
  gym= loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink= loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move.png","move1.png");
  bath = loadAnimation("bath1.png","bath2.png");
}


function setup() {
  createCanvas(800,400);
  /*bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgImg);
  bg.scale=0.2;*/

  astro = createSprite(300,230);
  //astro = createEdgeSprites();
  astro.addAnimation("sleeping",sleep);
  astro.scale=0.1;


  
}

function draw() {
 background(bgImg);  
 drawSprites();
 edges=createEdgeSprites();
  astro.bounceOff(edges);
  if (keyIsDown(UP_ARROW)){
    astro.addAnimation("brushing",brush)
    astro.changeAnimation("brushing");
    astro.y = 350;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if (keyIsDown(DOWN_ARROW)){
    astro.addAnimation("gyming",gym);
    astro.changeAnimation("gyming");
    astro.y = 370;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if (keyIsDown(RIGHT_ARROW)){
    astro.addAnimation("eating",eat);
    astro.addAnimation("eating");
    astro.x = 300;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if (keyIsDown(LEFT_ARROW)){
    astro.addAnimation("bathing",bath);
    astro.changeAnimation("bathing");
    astro.x = 150;
    astro.velocityX = 0;
    astro.velocityY = 0;
  }
  if(keyIsDown("m")){
    astro.addAnimation("moving",move);
    astro.changeAnimation("moving");
    astro.velocityX = 2;
    astro.velocityY = 2;
  }

  
}