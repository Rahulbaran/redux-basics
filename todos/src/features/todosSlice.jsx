import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }
  }
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo } = todosSlice.actions;
