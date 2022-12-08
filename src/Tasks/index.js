import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDone ? "list__item--hidden" : ""
        }`}
      >
        <button
          className="list__item--button list__item--button-toggleDone"
          alt="checkbox button"
        >
          {task.done ? "✔" : ""}
        </button>
        <span className={`${task.done ? "list__item--content-done" : ""} `}>
          {task.content}
        </span>
        <button
          className="list__item--button list__item--button-remove"
          alt="delete button"
        >
          {" "}
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
