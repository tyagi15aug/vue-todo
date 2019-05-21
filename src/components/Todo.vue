<template>
  <div class="todoContainer">
    <h1>Todo Vue App</h1>
    <input class="newTodoInput"
        autofocus
        autocomplete="off"
        placeholder="Enter a task"
        @keyup.enter="addTodoItem">
    <div class="todoListContainer">
      <div v-for="todo in todos" v-bind:key="todo.id">
        <TodoItem v-bind:item="todo" name="todo.id"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  props: ['todos'],
  components: {
    TodoItem
  },
  methods: {
    addTodoItem(event){
      this.$store.dispatch('todos/addTodoItem', event.target.value);
      event.target.value = '';
    }
  }
})
export default class Todo extends Vue {}
</script>

<style scoped>
.todoContainer {
  margin: 40px 0 0;
}
.completedTask {
  text-decoration: line-through;
}
</style>
