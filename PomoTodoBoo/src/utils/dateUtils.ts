export const getToday = () => {
  const date = new Date(Date.now())
  return transferDate(date)
}

export function transferDate(date: number | Date) {
  const origin = new Date(date)

  return (
    origin.getFullYear() +
    '년 ' +
    (origin.getMonth() + 1) +
    '월 ' +
    origin.getDay() +
    '일 ' +
    origin.getHours() +
    ':' +
    origin.getMinutes().toString().padStart(2, '0')
  )
}
