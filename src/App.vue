<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Todo App</span>
        <span class="font-weight-light">with Vue.js</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <div class="appContainer">
        <TodoList />
        <pie-chart
          :data="[
            ['Completed', allCompleted.length],
            ['Pending', allPending.length]
          ]"
        ></pie-chart>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("todos");

export default {
  name: "App",
  components: {
    TodoList
  },
  computed: {
    ...mapGetters(["allCompleted", "allPending"])
  }
};
</script>

<style>
* {
  font-family: "Dosis";
}
.appContainer {
  width: 75%;
  margin: 30px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
