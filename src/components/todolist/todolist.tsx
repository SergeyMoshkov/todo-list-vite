export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
  }

export function TodoList(props: PropsType) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div >
        <input/>
        <button className="buttonPlus">+</button>
      </div>
      <ul>
        <li><input type="checkbox" checked={props.tasks[0].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[0].title}</span></li>
        <li><input type="checkbox" checked={props.tasks[1].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[1].title}</span></li>
        <li><input type="checkbox" checked={props.tasks[2].isDone}/>&nbsp;&nbsp;&nbsp;<span>{props.tasks[2].title}</span></li>
      </ul>
    </div>
  );
}
