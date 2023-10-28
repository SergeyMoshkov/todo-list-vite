import { Header } from "@/components/header/header";
import { TaskType, TodoList } from "./components/todolist/todolist";

function App() {
  const movies: Array<TaskType> = [
    { id: 1, title: "Movie 1", isDone: false },
    { id: 2, title: "Movie 2", isDone: false },
    { id: 3, title: "Movie 3", isDone: true },
  ];

  const songs: Array<TaskType> = [
    { id: 1, title: "Song 1", isDone: false },
    { id: 2, title: "Song 2", isDone: true },
    { id: 3, title: "Song 3", isDone: true },
  ];

  const tasks: Array<TaskType> = [
    { id: 1, title: "Task 1", isDone: false },
    { id: 2, title: "Task 2", isDone: true },
    { id: 3, title: "Task 3", isDone: false },
  ];

  return (
    <div className="App">
      <Header />
      <div className="todo-list">
        <TodoList title="Javascript" tasks={tasks} />
        <TodoList title="Golang" tasks={songs} />
        <TodoList title="React" tasks={movies} />
      </div>
    </div>
  );
}

export default App;
