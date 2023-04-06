//canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//canvas settings
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;
var parts = [];

class Particle {
  contructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
  }
  draw(context) {
    context.fillRext(this.x, this.y, 10, 10);
  }
}

class Effect {
  contructor(width, height) {
    this.width = width;
    this.height = height;
    this.particles = [];
  }
  init() {
    //this.particles.push(new Particle(this)); // push method not working
    parts.push(new Particles(this));
    console.log(parts);

  }
}

const effect = new Effect(canvas.width, canvas.height);
effect.init();
console.log(effect);
