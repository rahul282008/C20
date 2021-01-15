var mr,fr;


function setup() {
  createCanvas(800,400);
 mr= createSprite(400, 200, 50, 50);
 fr= createSprite(200, 200, 50, 50);
 mr.shapeColor="orange";
 fr.shapeColor="orange";
}

function draw() {
  background(0);  
mr.y=World.mouseY;
mr.x=World.mouseX;

if(mr.x-fr.x>mr.width/2+fr.width/2||fr.x-mr.x>mr.width/2+fr.width/2||mr.y-fr.y>mr.height/2+fr.height/2||fr.y-mr.y>mr.height/2+fr.height/2){
  mr.shapeColor="blue";
 fr.shapeColor="blue";
}
else{
  mr.shapeColor="orange";
 fr.shapeColor="orange";
}
  drawSprites();
  
}