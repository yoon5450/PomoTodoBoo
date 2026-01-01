<script setup lang="ts">
import PomoTimer from './PomoTimer.vue'
import { ref } from 'vue'

const visible = defineProps<{ visible: boolean }>()

const initSecond = 1500 // 25분
const toggle = ref(true)
</script>

<template>
  <div class="pomo-container" v-if="visible">
    <PomoTimer :init-second="initSecond" :toggle="toggle" />
  </div>
</template>

<style scoped>
.pomo-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
