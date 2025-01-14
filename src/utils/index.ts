export const px = (v: number | string) => {
  if (typeof v === 'string') return v
  return `${v}px`
}
