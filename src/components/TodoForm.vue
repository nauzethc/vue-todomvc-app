<template>
  <form v-on:submit.prevent="onSubmit">
    <div class="field has-addons">
      <p class="control is-expanded">
        <input class="input" type="text" v-model="text" placeholder="Something to do" />
      </p>
      <p class="control">
        <button class="button is-primary" type="submit">Add</button>
      </p>
    </div>
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  data: () => ({ text: '' }),
  methods: {
    onSubmit (e) {
      if (this.text && this.text !== '') {
        this.$emit('new-todo', this.text)
        this.text = ''
      }
    }
  }
}
</script>

<style>
form {
  margin-bottom: 20px;
}
</style>