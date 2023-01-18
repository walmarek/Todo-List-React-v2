import { List, Item, ContentDone, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button
          onClick={() => toggleTaskDone(task.id)}
          toggleDone
          alt="checkbox button"
        >
          {task.done ? "✔" : ""}
        </Button>
        <ContentDone done={task.done}>{task.content}</ContentDone>
        <Button onClick={() => removeTask(task.id)} remove alt="delete button">
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
