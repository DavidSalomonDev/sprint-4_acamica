const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000)
  let interval = seconds / 3600

  if (interval > 1) {
    return 'Hace ' + Math.floor(interval) + (Math.floor(interval) === 1 ? ' hora' : ' horas')
  }
  interval = seconds / 60
  if (interval > 1) {
    return 'Hace ' + Math.floor(interval) + (Math.floor(interval) === 1 ? ' minuto' : ' minutos')
  }
  return 'Hace ' + Math.floor(seconds) + (Math.floor(seconds) === 1 ? ' segundo' : ' segundos')
}

export default function postDate(date) {
  const seconds = Math.floor((new Date() - date) / 1000)
  if (seconds < 86400) return timeSince(date)
  return date.toLocaleString('es-SV', { day: 'numeric' }) + ' ' + date.toLocaleString('es-SV', { month: 'short' })
}
