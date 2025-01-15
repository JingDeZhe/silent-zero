import { color2hex } from './color'
import { Rect, Shape } from './shape'

export class Painter {
  ctx: C2D
  shapes: Shape[] = []

  constructor(ctx: C2D) {
    this.ctx = ctx
  }

  setSize(w: number, h: number) {
    this.ctx.canvas.width = w
    this.ctx.canvas.height = h
  }

  fill(c: ColorType) {
    this.ctx.fillStyle = color2hex(c)
  }

  stroke(c: ColorType) {
    this.ctx.strokeStyle = color2hex(c)
  }

  push() {
    this.ctx.save()
  }

  pop() {
    this.ctx.restore()
  }

  background(c: ColorType) {
    this.push()
    this.fill(c)
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.pop()
  }

  addRect(config: RectConfig) {
    const rect = new Rect(this, config)
    this.shapes.push(rect)
    return rect
  }

  display() {
    for (const shape of this.shapes) {
      shape.display()
    }
  }
}
