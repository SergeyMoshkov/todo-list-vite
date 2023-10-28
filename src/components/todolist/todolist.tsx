export function TodoList(props: { title: string }) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <div >
        <input/>
        <button className="buttonPlus">+</button>
      </div>
      <ul>
        <li><input type="checkbox"/>&nbsp;&nbsp;&nbsp;<span>CSS & HTML</span></li>
        <li><input type="checkbox"/>&nbsp;&nbsp;&nbsp;<span>JS</span></li>
        <li><input type="checkbox" checked={true}/>&nbsp;&nbsp;&nbsp;<span>NODEJS</span></li>
      </ul>
    </div>
  );
}
