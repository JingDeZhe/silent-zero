export function gray2hex(gray: number) {
  if (gray < 0) gray = 0
  if (gray > 255) gray = 255
  const hex = gray.toString(16).padStart(2, '0')
  return `#${hex.repeat(3)}`
}

export const color2hex = (v: ColorType) => {
  if (typeof v === 'string') return v
  return gray2hex(v)
}
