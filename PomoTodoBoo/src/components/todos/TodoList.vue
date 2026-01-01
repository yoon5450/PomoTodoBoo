<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'
import type { Todo } from '@/types'
import { useRouter } from 'vue-router'

// at date를 변환 string으로 사용해도 되는가?
// 서버를 추가할 거고. 완료 데이터 원천은 서버에 있다. 어차피 받을 때 변환하면 되고, -> 아닌가? 컴포넌트에서 보여줄 때마다 변환?
// 원천 정합성 정확도는 createAt으로 저장될거니까. 오차는 아마 10s 이내.
// 완료 여부는 RPC로 해당 아이템 하나 찾아서 완료 처리하도록 변경하면 되고...

const route = useRouter()

const todos = ref<Todo[]>([
  { id: 1, title: 'Todo 1', completed: false, createAt: Date.now(), completeAt: 0 },
  { id: 2, title: 'Todo 2', completed: false, createAt: Date.now(), completeAt: 0 },
])

const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

const completeTodo = (id: number) => {
  todos.value = todos.value.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  )
}

const startPomo = (id: number) => {
  route.push({ query: { id, pomodoro: 'true' } })
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
    createAt: Date.now(),
    completed: false,
    completeAt: 0,
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
        @startPomo="startPomo"
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
