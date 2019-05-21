<template>
  <div class="todoContainer">
    <h1>Todo Vue App</h1>
    <v-form v-model="valid" onSubmit="return false;">
      <v-container>
        <v-layout>
          <v-flex xs12 md6>
            <v-text-field
              v-model="task"
              :rules="taskRule"
              :counter="100"
              label="Enter Task"
              required
              @keyup.enter="addTodoItem"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <div class="todoListContainer">
      <div v-for="todo in allTodos" v-bind:key="todo.id">
        <TodoItem v-bind:item="todo" name="todo.id" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("todos");

@Component({
  data: () => ({
    valid: true,
    task: "",
    taskRule: [
      (v: String) => !!v || "Task description is required",
      (v: String) =>
        v.length > 5 || "Task description is less than 5 characters",
      (v: String) =>
        v.length < 100 || "Task description must be less than 100 characters"
    ]
  }),
  computed: {
    ...mapGetters(["allTodos"])
  },
  components: {
    TodoItem
  },
  methods: {
    addTodoItem(event) {
      if (this.$data.valid) {
        this.$store.dispatch("todos/addTodoItem", this.$data.task);
        this.$data.task = "";
      }
    }
  }
})
export default class TodoList extends Vue {}
</script>

<style scoped>
.todoContainer {
  margin: 40px 0 0;
}
.completedTask {
  text-decoration: line-through;
}
</style>
