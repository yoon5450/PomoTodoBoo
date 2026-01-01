import { nextTick, ref, watch, onMounted, onUnmounted, computed } from 'vue'

export function useEventListener(target: EventTarget, event: string, callback: () => void) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

export function useTimer(initSecond: number) {
  const second = ref(initSecond)
  let beforeBackground: number | null = null
  const timerId = ref<number | null>(null)

  const startTimer = () => {
    if (!timerId.value)
      timerId.value = setInterval(() => {
        second.value -= 1
      }, 1000)
  }

  const pauseTimer = () => {
    clearInterval(timerId.value ?? 0)
    timerId.value = null
  }

  const resetTimer = () => {
    pauseTimer()
    second.value = initSecond
  }

  startTimer()

  watch(second, (newValue) => {
    if (newValue <= 0) {
      pauseTimer()
    }
  })

  const isActive = computed(() => (timerId.value ? true : false))

  useEventListener(window, 'visibilitychange', async () => {
    if (second.value <= 0) return

    if (document.visibilityState === 'hidden') {
      clearInterval(timerId.value ?? 0)
      timerId.value = null
      beforeBackground = new Date().getTime()
    } else {
      const interval = (new Date().getTime() - (beforeBackground ?? 0)) * 0.001
      if (interval >= second.value) {
        second.value = 0
        return
      }
      second.value = interval >= second.value ? 0 : second.value - Math.floor(interval)
      // DOM 업데이트 발생시
      await nextTick()
      startTimer()
    }
  })

  return { second, startTimer, pauseTimer, resetTimer, isActive }
}
