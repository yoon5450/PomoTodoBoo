export const getToday = () => {
  const date = new Date(Date.now())
  return transferDate(date)
}

export function transferDate(date: Date) {
  return (
    date.getFullYear() +
    '년 ' +
    (date.getMonth() + 1) +
    '월 ' +
    date.getDay() +
    '일 ' +
    date.getHours() +
    ':' +
    date.getMonth()
  )
}
