<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'
import type { Todo } from '@/types'
import { getToday } from '@/utils/dateUtils'

console.log(getToday())

const todos = ref<Todo[]>([
  { id: 1, title: 'Todo 1', completed: false, createAt: getToday(), completeAt: '' },
  { id: 2, title: 'Todo 2', completed: false, createAt: getToday(), completeAt: '' },
])

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const completeTodo = (id: number) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )
}

const completed = computed(() => {
  return todos.value.filter((item) => item.completed)
})

const unCompleted = computed(() => {
  return todos.value.filter((item) => !item.completed)
})

const addTodo = (title: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    createAt: getToday(),
    completed: false,
    completeAt: '',
  }
  todos.value.push(newTodo)
}
</script>

<template>
  <div class="todo-list-container">
    <TodoInput @addTodo="addTodo" />
    <h3 class="todo-list-header">남은 작업</h3>
    <ul class="todo-list">
      <TodoItem
        v-for="todo in unCompleted"
        :key="todo.id"
        :todo="todo"
        @deleteTodo="deleteTodo"
        @updateTodo="completeTodo"
      />
      <div class="empty-todo" v-if="unCompleted.length === 0">모든 작업을 마쳤습니다.</div>
    </ul>

    <h3 class="todo-list-header">완료한 작업</h3>
    <ul class="todo-list">
      <TodoItem
        v-for="todo in completed"
        :key="todo.id"
        :todo="todo"
        @deleteTodo="deleteTodo"
        @updateTodo="completeTodo"
      />
    </ul>
  </div>
</template>

<style scoped>
.todo-list-container {
  width: 100%;
}

.todo-list-header {
  color: #111111;
  margin-bottom: 1rem;
}

.todo-list {
  width: 100%;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 20px;
}

.empty-todo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
}
</style>
