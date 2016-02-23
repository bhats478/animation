/*
  Homework
*/

//declare your variables
function setup(){
  createCanvas(windowWidth,windowHeight);
}
//time of day + corresponding colour
function draw(){
  background("cadetblue");
  stroke("orange");
  fill("yellow");
  ellipse(mouseX, mouseY, 100,100);

  if(mouseX < windowWidth/2){
    background("DarkSlateBlue");
    stroke("white");
    fill("white");
    ellipse(mouseX, mouseY, 70,70);
  }

  if(mouseIsPressed){
    background("black");

}
}
