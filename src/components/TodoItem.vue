<template>
  <div v-bind:class="{ completedTask: item.completed }">
    <input type="checkbox" v-bind:checked="item.completed" v-on:change="toggleTodoItem(item)">
    {{ item.title }}
    <button @click="deleteTodoItem(item)">X</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  props: ["item"],
  methods: {
    toggleTodoItem(item){
      this.$store.dispatch('todos/toggleTodoItem', item);
    },
    deleteTodoItem(item){
      this.$store.dispatch('todos/deleteTodoItem', item);
    }
  }
})
export default class TodoItem extends Vue {}
</script>

<style scoped>
.completedTask {
  text-decoration: line-through;
}
</style>
