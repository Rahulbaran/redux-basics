import { configureStore } from "@reduxjs/toolkit";

// Reducers
import todosReducer from "./features/todosSlice";
import todoFormReducer from "./features/todoFormSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    todoForm: todoFormReducer
  }
});

export default store;
