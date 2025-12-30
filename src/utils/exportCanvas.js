export function exportCard(store, width, height) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = width
  canvas.height = height

  ctx.fillStyle = store.background.color
  ctx.fillRect(0, 0, width, height)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#000'

  ctx.font = `${store.typography.weight} ${store.typography.titleSize}px ${store.typography.fontFamily}`
  ctx.fillText(store.content.title, width / 2, height / 2 - 40, width - 120)

  ctx.font = `${store.typography.weight} ${store.typography.bodySize}px ${store.typography.fontFamily}`
  ctx.fillText(store.content.message, width / 2, height / 2 + 20, width - 160)

  const link = document.createElement('a')
  link.download = 'dedication-card.png'
  link.href = canvas.toDataURL()
  link.click()
}