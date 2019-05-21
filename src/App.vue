<template>
  <div id="app">
    <Todo v-bind:todos="todos"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "./components/Todo.vue";
import TodoItem from "./components/TodoItem.vue";

@Component({
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  components: {
    Todo
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 75%;
  margin: 60px auto;
}
</style>
