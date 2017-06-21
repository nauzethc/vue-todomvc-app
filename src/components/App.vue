<template>
  <section class="section app">
    <div class="container">
      <h1 class="title">TodoMVC with Vue.js</h1>
      <todo-form
        v-on:new-todo="create">
      </todo-form>
      <todo-filter
        v-if="todos.length"
        v-bind:filter="filter"
        v-on:set-filter="show">
      </todo-filter>
      <todo-list
        v-bind:todos="filtered"
        v-on:edit-todo="edit"
        v-on:del-todo="remove"
        v-on:toggle-todo="toggle">
      </todo-list>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
import TodoFilter from './TodoFilter.vue'

export default {
  name: 'App',
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList,
    'todo-filter': TodoFilter,
  },

  computed: mapState({
    todos: 'todos',
    filtered: state => (state.filter === 'all'
      ? state.todos
      : state.filter === 'completed'
        ? state.todos.filter(todo => todo.done)
        : state.todos.filter(todo => !todo.done)
    ),
    filter: 'filter',
  }),

  methods: mapActions([
    'create',
    'edit',
    'toggle',
    'remove',
    'show'
  ]),
}
</script>