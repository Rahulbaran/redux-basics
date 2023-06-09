import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { handleTodo, handleSubmit } from "../features/todoFormSlice";
import { addTodo } from "../features/todosSlice";

export default function () {
  const input = useRef();
  const { todo } = useSelector(state => state.todoForm);
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    input.current.focus();
  }, [input]);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTodo({ id: (todos.at(-1)?.id || 0) + 1, itemName: todo }));
    dispatch(handleSubmit());
  };

  return (
    <section className="form-container">
      <form
        className="todo-form"
        spellCheck="false"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="todo"
          required
          placeholder="item name"
          value={todo}
          onChange={e => dispatch(handleTodo({ todo: e.target.value }))}
          ref={input}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}
