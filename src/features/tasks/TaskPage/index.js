import Wrapper from "../../../common/Wrapper";
import Title from "../../../common/Title";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { Info } from "./styled";

function TaskPage() {
    const {id} = useParams()
    const task = useSelector(state => getTaskById(state, id))

  return (
    <Container>
      <Title title="Tasks details" />
      <Wrapper title={task ? task.content : "Task not found!"} body={<Info><strong>Ukończono:</strong>{task.done ? " Yes" : " No"}</Info>} />
    </Container>
  );
}

export default TaskPage;
