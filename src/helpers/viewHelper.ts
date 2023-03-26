export const durationView = (duration: number) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}ч ${minutes}м`
}

export const stopsView = (stopsArray: string[] | []) => {
  const stopsLength = stopsArray.length
  if (stopsLength === 1) {
    return '1 пересадка'
  }
  if (stopsLength >= 2) {
    return `${stopsLength} пересадки`
  }
  return 'без пересадок'
}
