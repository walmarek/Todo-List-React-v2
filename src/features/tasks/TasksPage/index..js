import Buttons from "./Buttons";
import Wrapper from "../../../common/Wrapper";
import Title from "../../../common/Title";
import Container from "../../../common/Container";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";
import Search from "./Search";


function TasksPage() {

  return (
    <Container>
      <Title title="To-do list" />
      <Wrapper title="Add new task" body={<TasksForm />} />
      <Wrapper title="Search" body={<Search />} />
      <Wrapper title="To-do list" body={<TasksList />} buttons={<Buttons />} />
    </Container>
  );
}

export default TasksPage;
