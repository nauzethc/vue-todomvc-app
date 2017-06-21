import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import 'bulma'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: 'Buy some groceries', done: false },
      { id: 2, text: 'Take a walk', done: true },
      { id: 3, text: 'Wash the car', done: false }
    ],
    loading: false,
    lastId: 3, 
    filter: 'all',
  },
  mutations: {
    create (state, text) {
      state.todos = state.todos.concat({
        id: state.lastId + 1,
        text,
        done: false
      })
      state.lastId += 1
    },
    toggle (state, id) {
      state.todos = state.todos.map(todo =>
        todo.id === id
          ? Object.assign({}, todo, { done: !todo.done })
          : todo
      )
    },
    edit (state, { id, text }) {
      state.todos = state.todos.map(todo =>
        todo.id === id
          ? Object.assign({}, todo, { text })
          : todo
      )
    },
    remove (state, id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    show (state, filter) {
      state.filter = filter
    },
    loading (state) {
      state.loading = !state.loading
    }
  },
  actions: {
    create: ({ commit }, text) => {
      commit('loading'),
      setTimeout(() => {
        commit('create', text)
        commit('loading')
      }, 2000)
    },
    toggle: ({ commit }, id)           => commit('toggle', id),
    edit:   ({ commit }, { id, text }) => commit('edit', { id, text }),
    remove: ({ commit }, id)           => commit('remove', id),
    show:   ({ commit }, filter)       => commit('show', filter),
  },
})

const vm = new Vue({
  el: '#app',
  store,
  components: { app: App },
  render: h => h('app')
})