var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(800, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //fixedRect.velocityY= 5;
  //movingRect.velocityY= -5;

  movingRect.velocityX= -5;
  fixedRect.velocityX= 5;


}

function draw() {
  background(0,0,0);  

  // calling the function
  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}
