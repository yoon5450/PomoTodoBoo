<script setup lang="ts">
import PomoContainer from '@/components/pomodoro/PomoContainer.vue'
import TodoList from '@/components/todos/TodoList.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const visible = computed(() => (route.query.id && route.query.pomodoro === 'true' ? true : false))
</script>

<template>
  <main>
    <TodoList />
    <PomoContainer :visible="visible" />
  </main>
</template>
