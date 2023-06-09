// Components
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";

export default function App() {
  return (
    <main className="app-wrapper">
      <h1>Todos List</h1>
      <TodoForm />
      <TodosContainer />
    </main>
  );
}
