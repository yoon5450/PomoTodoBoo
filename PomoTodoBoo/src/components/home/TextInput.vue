<script setup lang="ts">
const model = defineModel<string>()
</script>

<template>
  <input type="text" v-model="model" class="base-input" v-bind="$attrs" />
</template>

<style scoped>
.base-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.base-input:focus {
  border-color: #3b82f6;
}
</style>
