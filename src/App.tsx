import { Header } from "@/components/header/header";
import { TodoList } from "./components/todolist/todolist";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        <TodoList title="Todo List" />
        <TodoList title="Golang"/>
        <TodoList title="Javascript"/>
      </div>
    </div>
  );
}

export default App;
