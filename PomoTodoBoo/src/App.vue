<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/layout/MainHeader.vue'
</script>

<template>
  <MainHeader class="app-header" />
  <main class="app-content">
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
  background: #fff;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
}

.app-content {
  padding-top: var(--header-height);
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  min-height: calc(100vh - var(--header-height));
  box-sizing: border-box;
}
</style>
