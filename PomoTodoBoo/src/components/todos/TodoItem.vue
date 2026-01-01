<script setup lang="ts">
import type { Todo } from '@/types'
import { transferDate } from '@/utils/dateUtils'
import { Play, Trash2 } from 'lucide-vue-next'

const data = defineProps<{ todo: Todo }>()

const emit = defineEmits(['deleteTodo', 'updateTodo'])

const deleteTodo = (id: number) => {
  emit('deleteTodo', id)
}
</script>

<template>
  <li class="todo-item">
    <div class="todo-content-divider">
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
    </div>
    <div class="todo-content-divider">
      <div class="date-info">{{ transferDate(data.todo.createAt) }}</div>
      <button @click="deleteTodo(data.todo.id)" class="deleteBtn">
        <Trash2 :color="'white'" :size="32" />
      </button>
    </div>
  </li>
</template>

<style scoped>
.line-through {
  text-decoration: line-through;
}

.todo-content-divider {
  display: flex;
  gap: 8px;
  align-items: center;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: rgb(243, 243, 243);
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.date-info {
  font-size: 14px;
  color: #555555;
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
