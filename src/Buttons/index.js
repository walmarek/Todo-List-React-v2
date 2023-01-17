import { ListButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <ListButtons>
    {tasks.length !== 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Show" : "Hide"} completed
        </Button>
        <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
          Complete all
        </Button>
      </>
    )}
  </ListButtons>
);

export default Buttons;
