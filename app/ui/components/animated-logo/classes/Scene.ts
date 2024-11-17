const CHARS = '{}[]()<>!=+-*/%&|^~;:,.?`const let function class interface type return if else while for break continue import export default async await try catch throw new this extends implements static public private protected void null undefined true false string number boolean any never unknown div span p h1 h2 h3 h4 h5 h6 header footer nav main section article aside button input form label textarea select option ul ol li img a href src style class id margin padding border flex grid container wrapper component state props render useState useEffect onClick onChange onSubmit display position absolute relative fixed top left right bottom width height background-color color font-size font-weight text-align justify-content align-items flex-direction transform transition animation opacity visibility z-index overflow cursor pointer hover active focus media-query keyframes box-shadow border-radius'.split(' ');

export default class Scene {
  private container: HTMLElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private animationFrameId: number = 0;
  private fontSize = 24;
  private columns: number = 0;
  private drops: number[] = [];
  private colors = ['#61AFEF', '#E06C75', '#98C379', '#C678DD', '#E5C07B', '#56B6C2'];
  private xOffsets: number[] = [];
  private yOffsets: number[] = [];
  private charScales: number[] = [];
  private directions: { x: number; y: number }[] = [];
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private lastFrameTime: number = 0;
  private frameInterval: number = 1000 / 30; // 30 FPS

  constructor(container: HTMLElement, canvasClassName: string) {
    this.container = container;
    this.initCanvas(canvasClassName);
    this.initAudio();
    this.init();
  }

  /**
   * Initializes the audio context and sets up the audio analyzer. This method
   * requests access to the user's microphone, creates an audio context, and
   * sets up the audio analyzer with a media stream source. The analyzer is
   * configured with a reduced FFT size and increased smoothing for less
   * sensitivity. The method handles any errors that occur while accessing the
   * microphone.
   *
   * @return {Promise<void>} A promise that resolves when the audio has been
   * initialized.
   */
  private async initAudio(): Promise<void> {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioContext = new AudioContext();
      const source = this.audioContext.createMediaStreamSource(stream);
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 128; // Reduced FFT size for less sensitivity
      this.analyser.smoothingTimeConstant = 0.8; // Increased smoothing for less sensitivity
      source.connect(this.analyser);
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  }

  /**
   * Initializes the canvas element and appends it to the container.
   * This method creates a new canvas element, sets up the rendering context,
   * and appends the canvas to a specified container.
   *
   * @return {void}
   */
  private initCanvas(canvasClassName: string): void {
    this.canvas = document.createElement('canvas');
    this.canvas.className = canvasClassName;

    this.container?.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d')!;
  }

  /**
   * Initializes the canvas, sets its width and height to match the window dimensions,
   * and prepares the necessary variables for rendering the animation.
   *
   * This setup involves calculating the number of columns based on the canvas width
   * and font size, as well as initializing arrays for managing drop positions, offsets,
   * scales, and directions of the characters.
   *
   * @return {void} No return value.
   */
  private init(): void {
    if (!this.canvas || !this.ctx) return;

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.columns = Math.floor(this.canvas.width / this.fontSize);

    this.drops = [];
    this.xOffsets = [];
    this.yOffsets = [];
    this.charScales = [];
    this.directions = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = 1;
      this.xOffsets[i] = Math.random() * 10 - 5;
      this.yOffsets[i] = Math.random() * 10 - 5;
      this.charScales[i] = 1;
      this.directions[i] = {
        x: (Math.random() - 0.5) * 2,
        y: Math.random() * 2
      };
    }

    this.animate();
    this.handleResize();
  }

  /**
   * Handles the window resize event and adjusts the canvas dimensions and
   * initializes the properties for the falling characters effect.
   *
   * @return {void}
   */
  private handleResize(): void {
    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.columns = Math.floor(this.canvas.width / this.fontSize);
      this.drops = [];
      this.xOffsets = [];
      this.yOffsets = [];
      this.charScales = [];
      this.directions = [];
      for (let i = 0; i < this.columns; i++) {
        this.drops[i] = 1;
        this.xOffsets[i] = Math.random() * 10 - 5;
        this.yOffsets[i] = Math.random() * 10 - 5;
        this.charScales[i] = 1;
        this.directions[i] = {
          x: (Math.random() - 0.5) * 2,
          y: Math.random() * 2
        };
      }
    });
  }

  /**
   * Calculates and returns the audio level based on frequency data.
   * @return {number} The audio level, adjusted for sensitivity.
   * The level is one when no data is present.
   */
  private getAudioLevel(): number {
    if (!this.analyser || !this.dataArray) return 1;

    this.analyser.getByteFrequencyData(this.dataArray);
    const average = this.dataArray.reduce((acc, val) => acc + val, 0) / this.dataArray.length;
    return 1 + (average / 512); // Reduced sensitivity by increasing denominator
  }

  /**
   * Animates the characters on the canvas, producing a visual effect based on audio levels.
   *
   * @param {number} [timestamp=0] - The current time elapsed since the start of the animation.
   * @return {void}
   */
  private animate(timestamp: number = 0): void {
    if (!this.canvas || !this.ctx) return;

    const elapsed = timestamp - this.lastFrameTime;

    if (elapsed < this.frameInterval) {
      this.animationFrameId = requestAnimationFrame((t) => this.animate(t));
      return;
    }

    this.lastFrameTime = timestamp - (elapsed % this.frameInterval);

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = `${this.fontSize}px "Fira Code", monospace`;

    const audioLevel = this.getAudioLevel();

    for (let i = 0; i < this.drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      this.ctx.fillStyle = this.colors[Math.floor(Math.random() * this.colors.length)];

      this.xOffsets[i] += this.directions[i].x;
      this.yOffsets[i] += (Math.random() * 2 - 1);

      const xPos = i * this.fontSize + this.xOffsets[i];
      const yPos = this.drops[i] * this.fontSize + this.yOffsets[i];

      const scale = Math.max(this.charScales[i] - 0.05, 0.5) * (1 + (audioLevel - 1) * 0.25); // Reduced audio impact
      this.charScales[i] = scale;

      this.ctx.save();

      const centerX = xPos + this.fontSize / 2;
      const centerY = yPos + this.fontSize / 2;
      this.ctx.translate(centerX, centerY);
      this.ctx.scale(scale, scale);
      this.ctx.rotate(this.directions[i].x * 0.1 * (1 + (audioLevel - 1) * 0.25)); // Reduced audio impact
      this.ctx.translate(-centerX, -centerY);

      this.ctx.fillText(char, xPos, yPos);

      this.ctx.restore();

      if (this.drops[i] * this.fontSize > this.canvas.height ||
          xPos < 0 ||
          xPos > this.canvas.width ||
          Math.random() > 0.985) {
        this.drops[i] = 0;
        this.xOffsets[i] = Math.random() * 10 - 5;
        this.yOffsets[i] = Math.random() * 10 - 5;
        this.charScales[i] = 1.5;
        this.directions[i] = {
          x: (Math.random() - 0.5) * 2,
          y: Math.random() * 2
        };
      }

      this.drops[i] += this.directions[i].y * (0.75 + (Math.random() * 0.2 - 0.1)) * (1 + (audioLevel - 1) * 0.25); // Reduced audio impact
    }

    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  /**
   * Destroys the current object by performing the following actions:
   * 1. Cancels the current animation frame using the stored animation frame ID.
   * 2. Removes the canvas element from the document body if it exists.
   * 3. Closes the audio context if it exists.
   *
   * @return {void}
   */
  public destroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.canvas) {
      this.container?.removeChild(this.canvas);
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
  }
}
