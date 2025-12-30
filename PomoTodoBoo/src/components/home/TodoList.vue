<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const todos = ref<Todo[]>([
  { id: 1, title: 'Todo 1', completed: false },
  { id: 2, title: 'Todo 2', completed: false },
])

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const completeTodo = (id: number) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )
}

const addTodo = (title: string) => {
  const newTodo: Todo = {
    id: Date.now(),
    title,
    completed: false,
  }
  todos.value.push(newTodo)
}
</script>

<template>
  <div class="todo-list-container">
    <TodoInput @addTodo="addTodo" />
    <ul class="todo-list">
      <TodoItem
        v-for="todo in todos"
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

.todo-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
