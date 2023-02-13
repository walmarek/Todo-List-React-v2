import { useState } from "react";
import TasksForm from "../../features/tasks/TasksForm";
import TasksList from "../../features/tasks/TasksList";
import Buttons from "../../features/tasks/Buttons"
import Wrapper from "../../common/Wrapper"
import Title from "../../common/Title";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => setHideDone((hideDone) => !hideDone);

  const { tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } =
    useTasks();

  return (
    <Container>
      <Title title="To-do list" />
      <Wrapper
        title="Add new task"
        body={<TasksForm addNewTask={addNewTask} />}
      />
      <Wrapper
        title="To-do list"
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        buttons={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
