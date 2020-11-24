/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-this-in-sfc */
import React, { useRef, useEffect } from 'react';

import styles from './Loader.module.css';

class Particles {
  // particle colors
  colors: string[];

  // adds gradient to particles on true
  blurry: boolean;

  // adds white border
  border: boolean;

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

  // frames per second
  fps: number;

  // number of particles
  numParticles: number;

  // canvas element
  canvas: HTMLCanvasElement;

  // canvas context
  ctx: CanvasRenderingContext2D;

  constructor(canvas, {
    colors = [
      '245, 227, 224',
      '232, 180, 188',
      '227, 113, 109',
      '210, 130, 166',
      '207, 21, 46',
      '110, 69, 85',
      '58, 50, 56',
      '19, 19, 19',
    ],
    blurry = true,
    border = false,
    minRadius = 10,
    maxRadius = 35,
    minOpacity = 0.1,
    maxOpacity = 0.5,
    minSpeed = 0.05,
    maxSpeed = 0.5,
    fps = 120,
    numParticles = 500,
  }) {
    this.colors = colors;
    this.blurry = blurry;
    this.border = border;
    this.minRadius = minRadius;
    this.maxRadius = maxRadius;
    this.minOpacity = minOpacity;
    this.maxOpacity = maxOpacity;
    this.minSpeed = minSpeed;
    this.maxSpeed = maxSpeed;
    this.fps = fps;
    this.numParticles = numParticles;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
  }

  init() {
    this.resize();
    this.createCircle();
  }

  // eslint-disable-next-line class-methods-use-this
  _rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  resize() {
    const wHeight = this.canvas.parentElement.offsetHeight;
    const wWidth = this.canvas.parentElement.offsetWidth;

    this.canvas.width = wWidth;
    this.canvas.height = wHeight;

    window.addEventListener('resize', this.resize.bind(this));
  }

  createCircle() {
    const particle = [];

    for (let i = 0; i < this.numParticles; i++) {
      // eslint-disable-next-line no-bitwise
      const color = this.colors[~~(this._rand(0, this.colors.length))];

      particle[i] = {
        radius: this._rand(this.minRadius, this.maxRadius),
        xPos: this._rand(0, this.canvas.width),
        yPos: this._rand(0, this.canvas.height),
        xVelocity: this._rand(this.minSpeed, this.maxSpeed),
        yVelocity: this._rand(this.minSpeed, this.maxSpeed),
        color: `rgba(${color},${this._rand(this.minOpacity, this.maxOpacity)})`,
      };

      // once values are determined, draw particle on canvas
      this.draw(particle, i);
    }
    // ...and once drawn, animate the particle
    this.animate(particle);
  }

  draw(particle, i) {
    const { ctx } = this;

    if (this.blurry === true) {
      // creates gradient if blurry === true
      const grd = ctx.createRadialGradient(
        particle[i].xPos,
        particle[i].yPos,
        particle[i].radius,
        particle[i].xPos,
        particle[i].yPos,
        particle[i].radius / 1.25,
      );

      grd.addColorStop(1.000, particle[i].color);
      grd.addColorStop(0.000, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grd;
    } else {
      // otherwise sets to solid color w/ opacity value
      ctx.fillStyle = particle[i].color;
    }

    if (this.border === true) {
      ctx.strokeStyle = '#fff';
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  animate(particle) {
    setInterval(() => {
      // clears canvas
      this.clearCanvas();
      // then redraws particles in new positions based on velocity
      for (let i = 0; i < this.numParticles; i++) {
        particle[i].xPos += particle[i].xVelocity / 2;
        particle[i].yPos -= Math.cos(particle[i].yVelocity);

        // if particle goes off screen call reset method to place it offscreen to the left/bottom
        if (particle[i].xPos > this.canvas.width + particle[i].radius
          || particle[i].yPos > this.canvas.height + particle[i].radius) {
          this.resetParticle(particle, i);
        } else {
          this.draw(particle, i);
        }
      }
    }, 1000 / this.fps);
  }

  resetParticle(particle, i) {
    const random = this._rand(0, 1);

    if (random > 0.5) {
      // 50% chance particle comes from left side of window...
      particle[i].xPos = -particle[i].radius;
      particle[i].yPos = this._rand(0, this.canvas.height);
    } else {
      // ... or bottom of window
      particle[i].xPos = this._rand(0, this.canvas.width);
      particle[i].yPos = this.canvas.height + particle[i].radius;
    }
    // redraw particle with new values
    this.draw(particle, i);
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const Loader: React.FC = (props) => {
  const canvasRef = useRef(null);

  const draw = (canvas) => {
    new Particles(canvas, {}).init();
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    draw(canvas);
  }, [draw]);

  return <canvas className={styles.root} ref={canvasRef} {...props} />;
};

export default Loader;
