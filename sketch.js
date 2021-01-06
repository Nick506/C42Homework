function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

     
     hr = hour();
     mn = minute();
     sc = second();
{
  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
{
  function setup() {
    createCanvas(720, 400);
    noStroke();
  }
  
  function draw() {
    background(0);
    let c = map(mouseX, 720, width, 0, 175);
    let d = map(mouseX, 720, width, 40, 300);
    fill(255, c, 0);
    ellipse(width/2, height/2, d, d);
  }
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

}


}
 
   


