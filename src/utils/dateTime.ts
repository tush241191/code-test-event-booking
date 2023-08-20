export const getDateFromTimestamp = (timestamp: string) => {
  return new Date(timestamp)
}

export const getFormattedDateString = (timestamp: string) => {
  const dateObject = getDateFromTimestamp(timestamp)
  const dayOfWeek = dateObject.toLocaleString('et-EE', {weekday: 'short'})
  const day = dateObject.getDate()
  const month = dateObject.toLocaleString('et-EE', {month: 'long'})
  const year = dateObject.getFullYear()

  return `${dayOfWeek} ${day}.${month} ${year}`
}
