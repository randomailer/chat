export const timeFormat = (timeStamp, twelve) => {
  const date = new Date(timeStamp)
  let hours = date.getHours()
  if (twelve) {
    if (hours > 12) {
      hours -= 12
    } else if (hours === 0) {
        hours = 12
    }
  }

  return `${hours}:${date.getMinutes()}`
}