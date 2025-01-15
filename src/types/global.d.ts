declare global {
  type C2D = CanvasRenderingContext2D
  type ColorType = string | number

  type ShapeConfig = {
    x: number
    y: number
    fill?: ColorType
    stroke?: ColorType
  }

  type RectConfig = ShapeConfig & {
    w: number
    h: number
  }
}

export {}
