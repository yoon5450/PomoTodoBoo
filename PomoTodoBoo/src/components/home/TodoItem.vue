<script setup lang="ts">
import { Play, Trash2 } from 'lucide-vue-next'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const data = defineProps<{ todo: Todo }>()

const emit = defineEmits(['deleteTodo', 'updateTodo'])

const deleteTodo = (id: number) => {
  emit('deleteTodo', id)
}
</script>

<template>
  <li class="todo-item">
    <input
      type="checkbox"
      :checked="data.todo.completed"
      @change="emit('updateTodo', data.todo.id)"
    />
    <button type="button" className="roundBtn">
      <Play :color="'#111111'" :size="32" />
    </button>
    <span :class="{ 'line-through': data.todo.completed }">
      {{ data.todo.title }}
    </span>
    <button @click="deleteTodo(data.todo.id)" class="deleteBtn">
      <Trash2 :color="'white'" :size="32" />
    </button>
  </li>
</template>

<style scoped>
.line-through {
  text-decoration: line-through;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: rgb(243, 243, 243);
  padding: 0.5rem 1rem;
}

.deleteBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: #111111;
  color: #ffffff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
