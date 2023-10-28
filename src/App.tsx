import { Header } from "@/components/header/header";
import { TodoList } from "./components/todolist/todolist";

function App() {
  return (
    <div>
      <Header />
      <div className="todo-list">
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
