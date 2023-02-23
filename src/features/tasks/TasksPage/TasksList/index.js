import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, ContentDone, Button } from "./styled";

const TasksList = () => {
  const location = useLocation()
 const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
          <ContentDone done={task.done}><Link to={`/tasks/${task.id}`}>{task.content}</Link></ContentDone>
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
