import { useState } from "react";
import TasksForm from "./TasksForm";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Wrapper from "./Wrapper";
import Title from "./Title";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

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
          <Tasks
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
