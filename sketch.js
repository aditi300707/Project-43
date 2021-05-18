var hr  
var min 
var sc 
var hrAngle
var minAngle
var scAngle

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("black"); 
  
  stroke("white");
  fill("white")
  strokeWeight(3);
  textSize(70);
  text("TIME",600,70);

  hr = hour();
  min = minute();
  sc = second();

  translate(windowWidth/2,windowHeight/2)
  rotate(-90)

  scAngle = map(sc,0,60,0,360)
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  
  minAngle = map(min,0,60,0,360)
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  hrAngle = map(hr%12,0,12,0,360)
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  stroke(50,60,70);
  strokeWeight(7);
  noFill();
  point(0,0);
  stroke(255,0,0)
  arc(0,0,300,300,0,scAngle);
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);
  stroke(0,0,255)
  arc(0,0,260,260,0,hrAngle);
}