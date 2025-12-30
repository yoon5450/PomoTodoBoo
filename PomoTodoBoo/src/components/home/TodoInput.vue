<script setup lang="ts">
import { ref } from 'vue'
import TextInput from './TextInput.vue'
import { Plus } from 'lucide-vue-next'

const emit = defineEmits(['addTodo'])
const newTodoTitle = ref('')

const handleAddTodo = () => {
  if (newTodoTitle.value.trim()) {
    emit('addTodo', newTodoTitle.value)
    newTodoTitle.value = ''
  }
}
</script>

<template>
  <div class="todo-input-container">
    <TextInput
      v-model="newTodoTitle"
      placeholder="할 일을 입력하세요..."
      @keyup.enter="handleAddTodo"
    />
    <button @click="handleAddTodo" class="add-button" :disabled="!newTodoTitle.trim()">
      <Plus :size="20" />
      <span>추가</span>
    </button>
  </div>
</template>

<style scoped>
.todo-input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0 1rem;
  background-color: #111111;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.add-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-button:hover:not(:disabled) {
  opacity: 0.8;
}
</style>
