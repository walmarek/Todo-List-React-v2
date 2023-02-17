import { ListButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  clearAll,
  selectHideDone,
  selectIsListEmpty,
  selectAreAllTasksDone,
} from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isListEmpty = useSelector(selectIsListEmpty);
  const areAllTasksDone = useSelector(selectAreAllTasksDone);

  const dispatch = useDispatch();

  return (
    <ListButtons>
      {isListEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Show" : "Hide"} completed
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={areAllTasksDone}
          >
            Complete all
          </Button>
          <Button onClick={() => dispatch(clearAll())}>Clear all</Button>
        </>
      )}
    </ListButtons>
  );
};

export default Buttons;
