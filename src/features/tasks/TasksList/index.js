import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../tasksSlice";
import { List, Item, ContentDone, Button } from "./styled";

const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggleDone
            alt="checkbox button"
          >
            {task.done ? "✔" : ""}
          </Button>
          <ContentDone done={task.done}>{task.content}</ContentDone>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
            alt="delete button"
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
