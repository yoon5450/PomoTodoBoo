<script setup lang="ts">
import { computed } from 'vue'
import { useTimer } from '@/composables/useTimer'

interface Props {
  initSecond: number
}

const props = defineProps<Props>()

const { second, startTimer, pauseTimer, isActive } = useTimer(props.initSecond)

const formattedTime = computed(() => {
  const minutes = Math.floor(second.value / 60)
  const seconds = second.value % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
})

const progress = computed(() => {
  return ((props.initSecond - second.value) / props.initSecond) * 100
})

const toggleTimer = () => {
  if (isActive.value) {
    pauseTimer()
  } else {
    startTimer()
  }
}
</script>

<template>
  <div class="timer-container">
    <div class="timer-circle-container">
      <svg class="timer-svg" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="none" stroke="#e0e0e0" stroke-width="10" />
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="#ff6b6b"
          stroke-width="10"
          stroke-linecap="round"
          :stroke-dasharray="`${2 * Math.PI * 90}`"
          :stroke-dashoffset="`${2 * Math.PI * 90 * (1 - progress / 100)}`"
          transform="rotate(-90 100 100)"
          class="progress-circle"
        />
        <text x="100" y="105" text-anchor="middle" dominant-baseline="middle" class="timer-text">
          {{ formattedTime }}
        </text>
      </svg>
    </div>
    <button type="button" class="pause-button" @click="toggleTimer">
      {{ isActive ? '중지하기' : '재시작하기' }}
    </button>
  </div>
</template>

<style scoped>
.timer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.timer-circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.timer-svg {
  width: 100%;
  height: 100%;
}

.progress-circle {
  transition: stroke-dashoffset 1s linear;
}

.timer-text {
  font-size: 24px;
  font-weight: bold;
  fill: #333;
}

.pause-button {
  background-color: #969696;
  border-color: #333;
  border-radius: 8px;
  transition-duration: 0.2s;
  font-size: large;
  padding: 4px 8px;
}

.pause-button:hover {
  background-color: #c9c9c9;
}
</style>
