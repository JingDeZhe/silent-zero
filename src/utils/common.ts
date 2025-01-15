export function uuidv4() {
  const randomBytes = new Uint8Array(16)
  crypto.getRandomValues(randomBytes)

  randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40 // 版本 4
  randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80 // 变体 10

  const hexArray = Array.from(randomBytes).map((byte) =>
    byte.toString(16).padStart(2, '0')
  )

  return (
    hexArray.slice(0, 4).join('') +
    '-' +
    hexArray.slice(4, 6).join('') +
    '-' +
    hexArray.slice(6, 8).join('') +
    '-' +
    hexArray.slice(8, 10).join('') +
    '-' +
    hexArray.slice(10).join('')
  )
}

export function uid() {
  return uuidv4()
}
