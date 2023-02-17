import TasksForm from "../../features/tasks/TasksForm";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "../../features/tasks/Buttons";
import Wrapper from "../../common/Wrapper";
import Title from "../../common/Title";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Title title="To-do list" />
      <Wrapper title="Add new task" body={<TasksForm />} />
      <Wrapper title="To-do list" body={<TasksList />} buttons={<Buttons />} />
    </Container>
  );
}

export default Tasks;
