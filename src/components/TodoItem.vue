<template>
  <div class="field is-grouped">
    <p class="control">
      <input type="checkbox" v-on:click="onToggle(id)" v-bind:checked="done" />
    </p>
    <p class="control is-expanded">
      <span v-if="!editable" v-on:click="onToggleEditor">{{ text }}</span>
      <input v-else class="input" type="text" v-model="input" v-on:keyup.enter="onEdit" />
    </p>
    <p class="control">
      <a v-on:click="onDelete(id)" class="delete"></a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['id', 'text', 'done'],
  data: () => ({ editable: false, input: '' }),
  methods: {
    onToggleEditor () {
      this.input = this.text
      this.editable = true
    },
    onEdit (e) {
      if (this.input && this.input !== '') {
        this.$parent.$emit('edit-todo', { id: this.id, text: this.input })
        this.editable = false
      }
    },
    onDelete (id) {
      this.$parent.$emit('del-todo', id)
    },
    onToggle (id) {
      this.$parent.$emit('toggle-todo', id)
    }
  }
}
</script>