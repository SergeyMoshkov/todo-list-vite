import { Header } from "@/components/header/header";
import { TodoList } from "./components/todolist/todolist";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        <TodoList title="Javascript" />
        <TodoList title="Golang"/>
        <TodoList title="React"/>
      </div>
    </div>
  );
}

export default App;
