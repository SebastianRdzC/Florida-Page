const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth ;
canvas.height = innerHeight + 100;
c.fillStyle = "white";
c.strokeStyle = "white";
c.lineWidth = .2
class Particle {
  constructor(effect) {
    this.effect = effect;
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.speedY;
    this.speedX;
    this.speedModifier = Math.floor(Math.random() * 5 + 1);
    this.history = [{ x: this.x, y: this.y }];
    this.maxLength = Math.floor(Math.random() * 200 + 10);
    this.angle = 0;
    this.timer = this.maxLength * 2;
    
  }
  draw(context) {
    context.beginPath();
    context.moveTo(this.history[0].x, this.history[0].y);
    for (let i = 0; i < this.history.length; i++) {
      context.lineTo(this.history[i].x, this.history[i].y);
    }
    context.stroke();
  }
  update() {
    this.timer--;
    if (this.timer >= 1) {
      let x = Math.floor(this.x / this.effect.cellsSize);
      let y = Math.floor(this.y / this.effect.cellsSize);
      let index = y * this.effect.cols + x;
      this.angle = this.effect.flowField[index];

      this.speedX = Math.cos(this.angle);
      this.speedY = Math.sin(this.angle);

      this.x += this.speedX * this.speedModifier;
      this.y += this.speedY * this.speedModifier;

      this.history.push({ x: this.x, y: this.y });
      if (this.history.length > this.maxLength) {
        this.history.shift();
      }
      this.angle += 0.5;
    } else if (this.history.length > 1) {
      this.history.shift();
    } else {
      this.reset();
    }
  }
  reset() {
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.height);
    this.history = [{ x: this.x, y: this.y }];
    this.timer = this.maxLength * 2;
  }
}
class Effect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particles = [];
    this.numberOfParticles = 1000;
    this.cellsSize = 30;
    this.rows;
    this.cols;
    this.flowField = [];
    this.curve = 2.2;
    this.zoom = 0.1;
    this.init();
  }
  init() {
    this.rows = Math.floor(this.height / this.cellsSize);
    this.cols = Math.floor(this.width / this.cellsSize);
    this.flowField = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        let angle =
          (Math.cos(x * this.zoom) + Math.sin(y * this.zoom)) * this.curve;
        this.flowField.push(angle);
      }
      
    }
    //Create flow field
    for (let i = 0; i < this.numberOfParticles; i++) {
      this.particles.push(new Particle(this));
    }
  }
  render() {
    //Create particles JAJa, este codigo lo voy a amar, va servir para el regalo de Ari, aunque no creo que sea la gran cosa, pero aja
    this.particles.forEach((particle) => {
      particle.draw(c);
      particle.update();
    });
  }
}

const effect = new Effect(canvas.width, canvas.height);

export function animationCanvas() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  effect.render(c);
  requestAnimationFrame(animationCanvas);
}


