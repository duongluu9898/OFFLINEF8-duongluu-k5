export const initialState = {
  todoList: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "todo/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};
