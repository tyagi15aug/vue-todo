export const getters: any = {
  allTasks: (state:any) => {
    return state
  },
  allCompleted: (state:any) => {
    return state.filter((item:any)=> {return item.completed})
  },
  allPending: (state:any) => {
    return state.filter((item:any)=> {return !item.completed})
  },
};
