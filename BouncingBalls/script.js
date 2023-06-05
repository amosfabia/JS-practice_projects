let canvasElement = document.getElementById("canvas");
let canvas = canvasElement.getContext("2d");
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
canvasElement.width = canvasWidth;
canvasElement.height = canvasHeight;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

let mouseXLocation = 0;
let mouseYLocation = 0;

class Ball {
  constructor(xLocation, yLocation, radius) {
    this.xLocation = xLocation;
    this.yLocation = yLocation;
    this.radius = radius;
    this.xMovement = 5;
    this.yMovement = 2;
  }

  draw() {
    canvas.clearRect(0, 0, canvasWidth, canvasHeight);
    canvas.beginPath();
    canvas.arc(this.xLocation, this.yLocation, this.radius, 0, 2 * Math.PI);
    canvas.fillStyle = "white";
    canvas.fill();
  }
}
const myball = new Ball(100, 100, 30);

function animate() {
  requestAnimationFrame(animate);
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  myball.xLocation += myball.xMovement;
  myball.yLocation += myball.yMovement;
  if (
    myball.xLocation + myball.radius >= canvasWidth ||
    myball.xLocation - myball.radius <= 0
  ) {
    myball.xMovement = myball.xMovement * -1;
  }
  if (
    myball.yLocation + myball.radius >= canvasHeight ||
    myball.yLocation - myball.radius <= 0
  ) {
    myball.yMovement = myball.yMovement * -1;
  }
  myball.draw();
}

animate(myball);

// addEventListener("mousemove", (event) => {
//   mouseXLocation = event.clientX;
//   mouseYLocation = event.clientY;
//   firstBall.xLocation = mouseXLocation;
//   firstBall.yLocation = mouseYLocation;
//   firstBall.draw();
// });
