var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

function bounceOff(kashish,charlie){

  if (kashish.x - charlie.x < charlie.width/2 + kashish.width/2
    && charlie.x - kashish.x < charlie.width/2 + kashish.width/2) {
    kashish.velocityX = kashish.velocityX * (-1);
    charlie.velocityX = charlie.velocityX * (-1);
  }
  
}
