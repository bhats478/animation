/*
  Classwork
*/
//3: Make the balls change color when you click on the drawing.
//Hint --> You’re going to need a variable to keep track of your color,
//and an if statement to detect if the mouse is pressed.

var ballX = 0;
var ballY = 0;
var speed = 3;

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  if(mouseIsPressed){
    background("black");
  } else {
    background("darkGrey");
  }

  stroke("mediumVioletred")
  fill("mediumVioletred")
  ellipse(ballX, height/2, 50,50);
  ellipse(width/2,ballY,50,50);

  if (ballX >= width){
    speed = -3;
} else if (ballX <= 0) {
      speed = 3;
    }

    ballX = ballX + speed;

  if (ballY >= height) {
    speed = -3;
  } else if (ballY <= 0) {
      speed = 3;

  }

    ballY = ballY + speed;


}
