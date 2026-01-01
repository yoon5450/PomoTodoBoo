import { nextTick, ref, watch, onMounted, onUnmounted, type Ref } from 'vue'

export function useEventListener(target: EventTarget, event: string, callback: () => void) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

export function useTimer(initSecond: number, toggle: Ref) {
  const second = ref(initSecond)
  let beforeBackground: number | null = null
  let timerId: number | null = null

  const setTimer = () => {
    if (!timerId)
      timerId = setInterval(() => {
        second.value -= 1
      }, 1000)
  }

  setTimer()

  watch(toggle, () => {
    second.value = initSecond
  })

  watch(second, (newValue) => {
    if (newValue <= 0) {
      clearInterval(timerId ?? 0)
      timerId = null
    }
  })

  useEventListener(window, 'visibilitychange', async () => {
    if (second.value <= 0) return

    if (document.visibilityState === 'hidden') {
      clearInterval(timerId ?? 0)
      timerId = null
      beforeBackground = new Date().getTime()
    } else {
      const interval = (new Date().getTime() - (beforeBackground ?? 0)) * 0.001
      if (interval >= second.value) {
        second.value = 0
        return
      }
      second.value = interval >= second.value ? 0 : second.value - interval
      // DOM 업데이트 발생시
      await nextTick()
      setTimer()
    }
  })
  return { second }
}
