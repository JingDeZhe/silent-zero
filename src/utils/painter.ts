import { color2hex } from './color'

export class Painter {
  ctx: C2D

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

  drawRect(x: number, y: number, w: number, h: number) {
    this.ctx.fillRect(x, y, w, h)
  }

  addRect(config: RectConfig) {
    return new Rect(this, config)
  }
}

class Rect {
  painter: Painter
  x = 0
  y = 0
  w = 0
  h = 0
  fill: ColorType = 0
  stroke: ColorType = 'transparent'
  constructor(painter: Painter, config: RectConfig) {
    this.painter = painter
    this.x = config.x
    this.y = config.y
    this.w = config.w
    this.h = config.h
    this.fill = config.fill || 0
    this.stroke = config.stroke || 'transparent'
  }

  setPosition(x: number, y: number) {
    this.x = x
    this.y = y
  }

  setSize(w: number, h: number) {
    this.w = w
    this.h = h
  }

  display() {
    this.painter.push()
    this.painter.fill(this.fill)
    this.painter.stroke(this.stroke)
    this.painter.drawRect(this.x, this.y, this.w, this.h)
    this.painter.pop()
  }
}
