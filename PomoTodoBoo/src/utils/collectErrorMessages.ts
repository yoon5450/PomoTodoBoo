export const collectErrorMessages = (errorObj: Record<string, unknown>, prefix = ''): string[] => {
  const messages: string[] = []

  Object.entries(errorObj).forEach(([key, error]) => {
    if (error && typeof error === 'object') {
      if ('message' in error && error.message) {
        // 직접적인 에러 메시지
        messages.push(`${error.message}`)
      } else {
        // 중첩된 객체
        const nestedMessages = collectErrorMessages(
          error as Record<string, unknown>,
          prefix ? `${prefix}.${key}` : key,
        )
        messages.push(...nestedMessages)
      }
    }
  })

  return messages
}
