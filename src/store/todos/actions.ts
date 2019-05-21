export const actions: any = {
  addTodoItem ({ commit }, title:string) {
    commit('addTodoItem', {
      title,
      completed: false
    })
  },
  editTodoItem({ commit }, { todo, value }) {
    commit("editTodo", { todo, title: value });
  },
  toggleTodoItem({ commit }, todo: any) {
    commit("editTodoItem", { todo, completed: !todo.completed });
  },
  deleteTodoItem({ commit }, todo: any) {
    commit("deleteTodoItem", todo);
  }
};