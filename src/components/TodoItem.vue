<template>
  <div v-bind:class="{ completedTask: item.completed }">
    <input
      type="checkbox"
      v-bind:checked="item.completed"
      v-on:change="markCompleted"
    />
    {{ item.title }}
    <button @click="$emit('del-todo', item.id)">X</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TodoItem extends Vue {
  @Prop() private item!: any;
  private markCompleted = () => {
    this.item.completed = !this.item.completed;
  };
}
</script>

<style scoped>
.completedTask {
  text-decoration: line-through;
}
</style>
