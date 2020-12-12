//Create variables here
var dog,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  happyDog=loadImage("happydog.png");
  dog=loadImage("Dog.png");
}

function setup() {
  createCanvas(500, 500);
  var dog=createSprite(200,200,50,50);
  dog.addImage("dog",dogImg);
  
}


function draw() {  

  drawSprites();
  //add styles here
dog.display();
}



