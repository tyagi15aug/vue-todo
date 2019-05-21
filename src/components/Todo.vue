<template>
  <div class="todoContainer">
    <h1>Todo Vue App</h1>
    <div class="todoListContainer">
      <div v-for="todo in todos" v-bind:key="todo.id">
        <TodoItem
          v-bind:item="todo"
          name="todo.id"
          v-on:del-todo="$emit('del-todo', todo.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  @Prop() private todos!: any;
}
</script>

<style scoped>
.todoContainer {
  margin: 40px 0 0;
}
.completedTask {
  text-decoration: line-through;
}
</style>
