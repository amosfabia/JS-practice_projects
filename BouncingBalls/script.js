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
  }

    draw() {
        canvas.clearRect(0, 0, canvasWidth, canvasHeight);
    canvas.beginPath();
    canvas.arc(this.xLocation, this.yLocation, this.radius, 0, 2 * Math.PI);
    canvas.fillStyle = "white";
    canvas.fill();
  }
}

const firstBall = new Ball(100, 100, 20);
firstBall.draw();

addEventListener("mousemove", (event) => {
    mouseXLocation = event.clientX;
    mouseYLocation = event.clientY;
    firstBall.xLocation = mouseXLocation;
    firstBall.yLocation = mouseYLocation;
    firstBall.draw();
});