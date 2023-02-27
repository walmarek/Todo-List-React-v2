import Wrapper from "../../../common/Wrapper";
import Title from "../../../common/Title";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Info } from "./styled";
import { Textarea } from "./TextArea";
import { GoBack } from "../GoBack";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Title title="Tasks details" />
      <Wrapper
        title={task ? task.content : "Task not found!"}
        buttons={<GoBack />}
        body={
          task !== undefined && (
            <>
              <Info>
                <strong>Completed:</strong>
                {task.done ? " Yes" : " No"}
              </Info>
              <Textarea />
            </>
          )
        }
      />
    </Container>
  );
}

export default TaskPage;
