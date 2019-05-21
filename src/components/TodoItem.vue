<template>
  <div class="todoItemContainer">
    <v-checkbox v-model="item.completed" v-on:input="toggleTodoItem(item)">
      <template v-slot:label>
        <div
          class="todoLableContainer"
          v-bind:class="{ completedTask: item.completed }"
        >
          {{ item.title }}
          <div @click="deleteTodoItem(item)" class="deleteTask">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </template>
    </v-checkbox>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("todos");

@Component({
  props: ["item"],
  methods: {
    ...mapActions(["toggleTodoItem", "deleteTodoItem"])
  }
})
export default class TodoItem extends Vue {}
</script>

<style scoped>
.deleteTask {
  margin: 7px 10px 0px 10px;
  font-size: 0.5em;
}
.todoItemContainer,
.todoLableContainer {
  display: flex;
  font-size: 2em;
  line-height: 2.25em;
  flex-direction: row;
  align-items: center;
}
.completedTask {
  text-decoration: line-through;
}
</style>
