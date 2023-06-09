import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: ""
};

const todoFormSlice = createSlice({
  name: "todo-form",
  initialState,
  reducers: {
    handleTodo: (state, action) => {
      state.todo = action.payload.todo;
    },
    handleSubmit: state => {
      state.todo = "";
    }
  }
});

export default todoFormSlice.reducer;
export const { handleTodo, handleSubmit } = todoFormSlice.actions;
