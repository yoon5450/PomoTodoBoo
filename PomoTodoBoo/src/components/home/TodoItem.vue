<script setup lang="ts">
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const data = defineProps<{ todo: Todo }>();

const emit = defineEmits(['deleteTodo', 'updateTodo']);

const deleteTodo = (id: number) => {
  emit('deleteTodo', id);
};

</script>

<template>
  <li class="todo-item">
    <input type="checkbox" :checked="data.todo.completed" @change="emit('updateTodo', data.todo.id)" />
    <span :class="{ 'line-through': data.todo.completed }">
      {{ data.todo.title }}
    </span>
    <button @click="deleteTodo(data.todo.id)" class="deleteBtn">Del</button>
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
  background-color: #111111;
  color: #ffffff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}
</style>