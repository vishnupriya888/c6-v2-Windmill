var base, fan1, fan2,fan3;
var gameState;
function setup() {
  createCanvas(400, 400);
  base = createSprite(200,220,15,150);
  base.shapeColor ="turquoise";
  
  fan1 = createSprite(200,150,120,10);
  fan1.shapeColor = 'lightpink';
  
  fan4 = createSprite(200,150,10,120);
  fan4.shapeColor = 'lightyellow';
  
  fan2 = createSprite(200,150,10,120);
  fan2.shapeColor = 'lightblue';
  
  fan3 = createSprite(200,150,10,120);
  fan3.shapeColor = 'lightgreen';
  
  
  
  fan3.rotation = 45;
  fan4.rotation = 310;
  
  gameState = "start";
  
}

function draw() {
  background("lavender");
  drawSprites();
  fill("black");
  textSize(13);
  text("Press 'E' to End Rotation",200,320);
  text("Press 'Space' to Start Rotation",200,340);
  text("Press 'F' to Speed Rotation",200,360);
  text("Press 'S' to Slow Rotation",200,380);
  if(gameState ==="start"){
    fan1.rotationSpeed = 5;
    fan2.rotationSpeed = 5;
    fan3.rotationSpeed = 5;
    fan4.rotationSpeed = 5;
  }
  else if(gameState ==="stop"){
    fan1.rotationSpeed = 0;
    fan2.rotationSpeed = 0;
    fan3.rotationSpeed = 0;
    fan4.rotationSpeed = 0;
  }
  else if(gameState === "fast"){
    fan1.rotationSpeed = 25;
    fan2.rotationSpeed = 25;
    fan3.rotationSpeed = 25;
    fan4.rotationSpeed = 25;
  }
  else if(gameState === "slow"){
    fan1.rotationSpeed = 2;
    fan2.rotationSpeed = 2;
    fan3.rotationSpeed = 2;
    fan4.rotationSpeed = 2;
  }
  if(keyDown("f")){
   gameState = "fast"; 
  }
  else if(keyDown("e")){
   gameState = "stop"; 
  }
  else if(keyDown("space")){
   gameState = "start"; 
  }
  else if(keyDown("s")){
   gameState = "slow"; 
  }
}