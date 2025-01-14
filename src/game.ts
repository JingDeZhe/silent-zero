export class Game {
  ctx: CanvasRenderingContext2D
  isRunning = false
  lastTime = 0
  deltaTime = 0

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')!
    this.init()
  }

  private init() {
    this.isRunning = true
    this.lastTime = performance.now()
    this.gameLoop(performance.now())
  }

  private gameLoop(timestamp: number) {
    if (!this.isRunning) return

    requestAnimationFrame(this.gameLoop)
    const deltaTime = timestamp - this.lastTime
    this.update(deltaTime)
    this.render()
  }

  private update(delta: number) {}

  private render() {}
}
