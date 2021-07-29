var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples()
  drawSprites();
}

function spawnApples(){
  //createApples()
  if (frameCount%100===0){ 
  apple = createSprite (300, 100, 40, 10)
  apple.velocityY = 3
  apple.addImage('apple1', appleImage)
  apple.scale = 0.05
  apple.x = Math.round(random(10, 360))
 }
 }
