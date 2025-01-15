import { Painter } from './painter'

export abstract class Shape {
  x = 0
  y = 0
  fill: ColorType = 0
  stroke: ColorType = 'transparent'
  constructor(config: ShapeConfig) {
    this.x = config.x
    this.y = config.y
    this.fill = config.fill || 0
    this.stroke = config.stroke || 'transparent'
  }

  setPos(x: number, y: number) {
    this.x = x
    this.y = y
  }

  abstract display(): void
}

export class Rect extends Shape {
  painter: Painter
  w = 0
  h = 0
  constructor(painter: Painter, config: RectConfig) {
    super(config)
    this.painter = painter
    this.w = config.w
    this.h = config.h
  }

  setSize(w: number, h: number) {
    this.w = w
    this.h = h
  }

  display() {
    this.painter.push()
    this.painter.fill(this.fill)
    this.painter.stroke(this.stroke)
    this.painter.ctx.fillRect(this.x, this.y, this.w, this.h)
    this.painter.pop()
  }
}
