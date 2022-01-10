var rehan, molly;



function setup() {
  createCanvas(800,400);
  rehan = createSprite(200,200,50,80);
  rehan.shapeColor = "green";
  
  molly = createSprite(400,200,80,30);
  molly.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  drawSprites();

  console.log(molly.x);
  

  molly.x = World.mouseX;
  molly.y  =  World.mouseY;

  isTouching();
}

function isTouching(){
  if(molly.x - rehan.x === molly.width/2  + rehan.width/2){
    molly.shapeColor = "red";
    rehan.shapeColor = "red";
  }
  

}