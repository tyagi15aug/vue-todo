<template>
  <div id="app">
    <Todo v-bind:todos="todos" v-on:del-todo="deleteTodoItem"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todo from "./components/Todo.vue";
import TodoItem from "./components/TodoItem.vue";

@Component({
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Interview with WeWork",
          completed: false
        },
        {
          id: 2,
          title: "Do well and pass the Joyent interview",
          completed: true
        },
        {
          id: 3,
          title: "Pass the ATT interview",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodoItem(id) {
      this.$data.todos = this.$data.todos.filter((item: any) => item.id !== id);
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
