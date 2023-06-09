import { useDispatch } from "react-redux";

// Actions
import { deleteTodo } from "../features/todosSlice";

export default function TodoCard({ todo }) {
  const dispatch = useDispatch();

  return (
    <article className="todo-card" id={"todo-" + todo.id}>
      <p>{todo.itemName}</p>
      <button onClick={() => dispatch(deleteTodo({ id: todo.id }))}>
        Delete
      </button>
    </article>
  );
}
