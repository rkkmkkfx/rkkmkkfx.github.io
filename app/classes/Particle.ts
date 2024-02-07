function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Particle {
  // canvas element
  canvas: HTMLCanvasElement | null;

  // canvas context
  ctx: CanvasRenderingContext2D | null;

  // particle colors
  colors: string[];

  // particle radius min
  minRadius: number;

  // particle radius max
  maxRadius: number;

  // particle opacity min
  minOpacity: number;

  // particle opacity max
  maxOpacity: number;

  // particle speed min
  minSpeed: number;

  // particle speed max
  maxSpeed: number;

  radius: number;

  xPos: number;

  yPos: number;

  xVelocity: number;

  yVelocity: number;

  color: string;

  blurry: boolean;

  border: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.colors = [
      '245, 227, 224',
      '232, 180, 188',
      '227, 113, 109',
      '210, 130, 166',
      '207, 21, 46',
      '110, 69, 85',
      '58, 50, 56',
      '19, 19, 19',
    ];
    this.minRadius = 10;
    this.maxRadius = 35;
    this.minOpacity = 0.1;
    this.maxOpacity = 0.5;
    this.minSpeed = 0.05;
    this.maxSpeed = 0.5;
    this.radius = rand(this.minRadius, this.maxRadius);
    this.xPos = rand(0, this.canvas.width);
    this.yPos = rand(0, this.canvas.height);
    this.xVelocity = rand(this.minSpeed, this.maxSpeed);
    this.yVelocity = rand(this.minSpeed, this.maxSpeed);
    this.blurry = true;
    this.border = false;

    // eslint-disable-next-line no-bitwise
    const color = this.colors[~~(rand(0, this.colors.length))];
    this.color = `rgba(${color},${rand(this.minOpacity, this.maxOpacity)})`;
  }

  draw(): void {
    const { ctx } = this;
    if (!ctx) return;

    if (this.blurry) {
      // creates gradient if blurry === true
      const grd = ctx.createRadialGradient(
        this.xPos,
        this.yPos,
        this.radius,
        this.xPos,
        this.yPos,
        this.radius / 1.25,
      );

      grd.addColorStop(1.000, this.color);
      grd.addColorStop(0.000, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grd;
    } else {
      // otherwise sets to solid color w/ opacity value
      ctx.fillStyle = this.color;
    }

    if (this.border === true) {
      ctx.strokeStyle = '#fff';
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  update(): void {
    this.xPos += this.xVelocity / 2;
    this.yPos -= Math.cos(this.yVelocity);
  }

  reset(): void {
    if (!this.canvas) return;
    const random = rand(0, 1);

    if (random > 0.5) {
      // 50% chance particle comes from left side of window...
      this.xPos = -this.radius;
      this.yPos = rand(0, this.canvas.height);
    } else {
      // ... or bottom of window
      this.xPos = rand(0, this.canvas.width);
      this.yPos = this.canvas.height + this.radius;
    }
    // redraw particle with new values
    this.draw();
  }
}
