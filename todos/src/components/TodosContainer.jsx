import { useSelector } from "react-redux";

// Components
import TodoCard from "./TodoCard";

export default function TodosContainer() {
  const { todos } = useSelector(state => state.todos);

  if (todos.length < 1) {
    return (
      <section className="todos-container">
        <h2>No Todos</h2>
      </section>
    );
  }

  return (
    <section className="todos-container">
      {todos.map(todo => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
    </section>
  );
}
