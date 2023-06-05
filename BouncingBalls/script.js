let canvasElement = document.getElementById("canvas");
let canvas = canvasElement.getContext("2d");
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
canvasElement.width = canvasWidth;
canvasElement.height = canvasHeight;
canvas.globalAlpha = 0.5;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

let mouseXLocation = 0;
let mouseYLocation = 0;

function getRandom(minimum, maximum) {
  return Math.random() * (maximum - minimum) + minimum;
}

function getRandomColor() {
  return `rgb(${getRandom(0, 250)},${getRandom(0, 250)},${getRandom(0, 250)})`;
}

class Ball {
  constructor() {
    this.xLocation = getRandom(0, window.innerWidth);
    this.yLocation = getRandom(0, window.innerHeight);
    this.radius = getRandom(15, 30);
    this.xMovement = getRandom(1, 12);
    this.yMovement = getRandom(1, 12);
    this.color = getRandomColor();
  }

  draw() {
    canvas.beginPath();
    canvas.arc(this.xLocation, this.yLocation, this.radius, 0, 2 * Math.PI);
    canvas.fillStyle = this.color;
    canvas.fill();
  }
}

const balls = [];

for (let i = 0; i < 10; i++) {
  const ball = new Ball();
  balls.push(ball);
}

function animate() {
  canvasHeight = window.innerHeight;
  canvasWidth = window.innerWidth;
  canvas.clearRect(0, 0, canvasWidth, canvasHeight);
  balls.forEach((ball) => {
    ball.xLocation += ball.xMovement;
    ball.yLocation += ball.yMovement;
    if (
      ball.xLocation + ball.radius >= canvasWidth ||
      ball.xLocation - ball.radius <= 0
    ) {
      ball.xMovement *= -1;
    }
    if (
      ball.yLocation + ball.radius >= canvasHeight ||
      ball.yLocation - ball.radius <= 0
    ) {
      ball.yMovement *= -1;
    }
    ball.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// addEventListener("mousemove", (event) => {
//   mouseXLocation = event.clientX;
//   mouseYLocation = event.clientY;
//   firstBall.xLocation = mouseXLocation;
//   firstBall.yLocation = mouseYLocation;
//   firstBall.draw();
// });
