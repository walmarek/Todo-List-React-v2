import Wrapper from "../../../common/Wrapper";
import Title from "../../../common/Title";
import Container from "../../../common/Container";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectExampleTasksIsLoading, selectIsListEmpty } from "../tasksSlice";
import { Button } from "./styled";
import Buttons from "./Buttons";

function TasksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectExampleTasksIsLoading)

  const isListEmpty = useSelector(selectIsListEmpty);

  return (
    <Container>
      <Title title="To-do list" />
      <Wrapper
        title="Add new task"
        body={<TasksForm />}
        buttons={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={isListEmpty || isLoading}>
            {isLoading ? "Loading..." : "Get example tasks"}
          </Button>
        }
      />
      <Wrapper title="Search" body={<Search />} />
      <Wrapper title="To-do list" body={<TasksList />} buttons={<Buttons />} />
    </Container>
  );
}

export default TasksPage;
