<template>
  <div class="tabs is-centered">
    <ul>
      <template v-for="f in filters">
        <li v-bind:class="filter === f ? 'is-active':''">
          <a v-on:click="onChange(f)">
            {{ f.slice(0, 1).toUpperCase().concat(f.slice(1)) }}
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoFilter',
  props: ['filter'],
  data: () => ({ filters: ['all', 'completed', 'uncompleted'] }),
  methods: {
    onChange (filter) {
      this.$emit('set-filter', filter)
    }
  }
}
</script>