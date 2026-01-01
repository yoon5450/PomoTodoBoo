<script setup lang="ts">
import PomoContainer from '@/components/pomodoro/PomoContainer.vue'
import TodoList from '@/components/todos/TodoList.vue'
</script>

<template>
  <main>
    <TodoList />
    <PomoContainer :visible="true" />
  </main>
</template>
