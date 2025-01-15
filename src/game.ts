import { Painter } from './utils/painter'

export class Game {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  painter: Painter
  isRunning = false
  lastTime = 0
  deltaTime = 0
  w = 300
  h = 300

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.painter = new Painter(this.ctx)
    this.init()
  }

  setSize(w: number, h: number) {
    this.w = w
    this.h = h
    this.painter.setSize(w, h)
  }

  private init() {
    this.setSize(this.w, this.h)
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
    this.painter.background('#fff')

    this.painter.fill('#E06C75')
    this.painter.addRect({ x: 10, y: 10, w: 50, h: 50 })
  }
}
