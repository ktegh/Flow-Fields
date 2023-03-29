//canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * 0.9;
canvas.height = 700;

//global settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'magenta';
ctx.createLinearGradient(0,0,canvas.width, canvas.height)

class Line {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.floor(Math.random() * this.canvas.width);
    this.y = Math.floor(Math.random() * this.canvas.height);
    this.history = [{ x: this.x, y: this.y }];
    this.lineWidth = Math.floor(Math.random() * 5 + 1);
    this.hue = Math.floor(Math.random() * 360);
    this.maxHistoryLength = Math.floor(Math.random() * 150 + 10);
    this.speedX = Math.random()*1-0.5;
    this.speedY = 7;
    this.lifeSpan = this.maxLength * 3;
    this.timer = 0;
  }
  draw(context) {
    context.strokeStyle = 'hsl(' + this.hue + '0, 100%, 50%)';
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.history[0].x, this.history[0].y);
    for (let i = 0; i < this.history.length; i++) {
      context.lineTo(this.history[i].x, this.history[i].y);
    }
    context.stroke();
  }
  update() {
    this.timer++;
    /* vvv Cause of Code not Working *27:42 Video* - "If Statement" vvv */
    if (this.timer < this.lifeSpan) {
      //^^This Line^^
      this.x += this.speedX + Math.random() * 20 - 10;
      this.y += this.speedY + Math.random() * 20 - 10;
      this.history.push({ x: this.x, y: this.y });
      if (this.history.length > this.maxHistoryLength) {
        this.history.shift();
      }
    } else if (this.history.length <= 1) {
      // ^^This Line^^
      this.reset();
    } else {
      this.history.shift();
    }
  }
  reset() {
    this.x = Math.floor(Math.random() * this.canvas.width);
    this.y = Math.floor(Math.random() * this.canvas.height);
    this.history = [{ x: this.x, y: this.y }];
    this.timer = 0;
  }
}

const linesArray = [];
const numberOfLines = 100;
for (let i = 0; i < numberOfLines; i++) {
  linesArray.push(new Line(canvas));
}
console.log(linesArray);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //draw line
  linesArray.forEach((line) => {
    line.draw(ctx);
    line.update();
  });
  requestAnimationFrame(animate);
}
animate();
