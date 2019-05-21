export const mutations = {
  addTodoItem(state: any, todo: any) {
    state.push(todo);
  },
  deleteTodoItem(state: any, todo: any) {
    state.splice(state.indexOf(todo), 1);
  },
  editTodoItem(
    state: any,
    { todo, title = todo.title, completed = todo.completed }
  ) {
    todo.title = title;
    todo.completed = completed;
  }
};
