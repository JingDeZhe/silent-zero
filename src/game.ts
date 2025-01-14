import { px } from './utils'

export class Game {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  isRunning = false
  lastTime = 0
  deltaTime = 0
  w = 300
  h = 300

  constructor(canvas: HTMLCanvasElement) {
    canvas.setAttribute('width', px(this.w))
    canvas.setAttribute('height', px(this.h))
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.init()
  }

  private init() {
    this.isRunning = true
    this.startGameLoop()
  }

  private startGameLoop() {
    this.lastTime = performance.now()
    requestAnimationFrame((ts) => this.gameLoop(ts))
  }

  private gameLoop(timestamp: number) {
    if (!this.isRunning) return

    requestAnimationFrame((ts) => this.gameLoop(ts))
    const deltaTime = timestamp - this.lastTime
    this.update(deltaTime)
    this.render()
  }

  private update(delta: number) {}

  private render() {
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, this.w, this.h)
    this.ctx.fillStyle = '#995775'
    this.ctx.fillRect(10, 10, 30, 30)
  }
}
