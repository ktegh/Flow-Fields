const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;

//global settings

ctx.lineWidth = 10;
ctx.strokeStyle = 'red';
ctx.lineCap = 'round';

class Line {
  constructor(canvas, context) {
    this.canvas = canvas;
    this.context = context;
    this.startX = Math.floor(Math.random() * this.canvas.width);
    this.startY = Math.floor(Math.random() * this.canvas.height);
    this.endX = Math.floor(Math.random() * this.canvas.width);
    this.endY = Math.floor(Math.random() * this.canvas.height);
    this.lineWidth = Math.floor(Math.random() * 15 + 1);
    this.hue = Math.floor(Math.random() * 360);
  }
  draw(context) {
    context.strokeStyle = 'hsl(' + this.hue + '0, 100%, 50%)';
    context.lineWidth = this.lineWidth;
    context.beginPath();
    context.moveTo(this.startX, this.startY);
    context.lineTo(this.endX, this.endY);
    context.stroke();
  }
}

const linesArray = [];
for (let i = 0; i <= 10; i++) {
  linesArray.push(new Line(canvas));
  for (let h = 0; h <= linesArray.length; h++) {
    linesArray[h].draw(ctx);
  }
}
console.log(linesArray);
