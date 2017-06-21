<template>
  <div>
    <todo-item v-for="todo in todos"
      v-bind:key="todo.id"
      v-bind:id="todo.id"
      v-bind:text="todo.text"
      v-bind:done="todo.done">
    </todo-item>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    'todo-item': TodoItem
  }
}
</script>