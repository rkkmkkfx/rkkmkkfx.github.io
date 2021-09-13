import Particle from './Particle';

export default class Scene {
  // adds white border
  border: boolean;

  // frames per second
  fps: number;

  // number of particles
  numParticles: number;

  // canvas element
  canvas: HTMLCanvasElement;

  // canvas context
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, {
    fps,
    numParticles,
  }: { fps: number, numParticles: number }) {
    this.fps = fps;
    this.numParticles = numParticles;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  init(): void {
    this.resize();
    this.createScene();
  }

  resize(): void {
    this.canvas.width = this.canvas.parentElement.offsetWidth;
    this.canvas.height = this.canvas.parentElement.offsetHeight;

    window.addEventListener('resize', this.resize.bind(this));
  }

  createScene(): void {
    const particles = [];

    for (let i = 0; i < this.numParticles; i++) {
      particles[i] = new Particle(this.canvas);
      particles[i].draw();
    }
    this.animate(particles);
  }

  clearCanvas(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  animate(particles: Particle[]): void {
    setInterval(() => {
      // clears canvas
      this.clearCanvas();
      // then redraws particles in new positions based on velocity
      for (let i = 0; i < this.numParticles; i++) {
        particles[i].update();

        // if particle goes off screen call reset method to place it offscreen to the left/bottom
        if (particles[i].xPos > this.canvas.width + particles[i].radius
          || particles[i].yPos > this.canvas.height + particles[i].radius) {
          particles[i].reset();
        } else {
          particles[i].draw();
        }
      }
    }, 1000 / this.fps);
  }
}
