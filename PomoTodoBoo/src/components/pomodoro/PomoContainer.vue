<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import PomoTimer from './PomoTimer.vue'
import { X } from 'lucide-vue-next'

defineProps<{ visible: boolean }>()
const router = useRouter()
const route = useRoute()

const onClose = () => {
  router.push({ path: route.path })
}

const initSecond = 1500 // 25분
</script>

<template>
  <div class="pomo-modal" v-if="visible">
    <div class="pomo-contents">
      <PomoTimer :init-second="initSecond" />
      <button type="button" @click="onClose"><X :size="24" /></button>
    </div>
  </div>
</template>

<style scoped>
.pomo-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
}

.pomo-contents {
  display: flex;
}
</style>
