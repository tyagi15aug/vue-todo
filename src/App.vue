<template>
  <div id="app">
    <Todo v-bind:todos="todos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "./components/Todo.vue";
import TodoItem from "./components/TodoItem.vue";

@Component({
  computed: {
    todos () {
      return this.$store.state.todos
    },
  },
  methods: {
    /* deleteTodoItem(id) {
      this.$data.todos = this.$data.todos.filter((item: any) => item.id !== id);
    } */
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
