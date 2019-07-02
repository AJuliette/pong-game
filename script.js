var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var startBtn = document.getElementById("startBtn");

startBtn.onclick = function() {
  startBtn.style.display = "none"
  paddle1 = new Paddle(10)
  paddle2 = new Paddle(970)
  ball = new Ball()
  window.requestAnimationFrame(draw)
}

// ----------- BALL -----------
function Ball() {
  this.color = "tomato";
  this.x = canvas.width / 2;
  this.y = canvas.height / 2;
  this.ballRadius = 10;
}

Ball.prototype.drawBall = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI * 2)
  ctx.fill()
}

// ----------- PADDLE -----------
function Paddle(x) {
  this.color = "tomato";
  this.x = x;
  this.y = canvas.height / 2;
  this.width = 20;
  this.height = 120;
}

Paddle.prototype.drawPaddle = function() {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height)
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  paddle1.drawPaddle()
  paddle2.drawPaddle()
  ball.drawBall()
  window.requestAnimationFrame(draw)
}

function keyDownHandler(event) {
  if (event.key == "z") {
    paddle1.y -= 5 
  } else if (event.key === "s") {
    paddle1.y += 5
  } else if (event.key === "ArrowUp") {
  paddle2.y -= 5
  } else if (event.key === "ArrowDown") {
    paddle2.y += 5
  }
}

document.onkeydown = keyDownHandler