import { ListButtons } from "../styled";
import { useSelector, useDispatch } from "react-redux";
import AlertConfirm from "react-alert-confirm";
import "react-alert-confirm/lib/style.css";
import {
  toggleHideDone,
  setAllDone,
  clearAll,
  selectHideDone,
  selectIsListEmpty,
  selectAreAllTasksDone,
} from "../../tasksSlice";
import Button from "../../Button";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isListEmpty = useSelector(selectIsListEmpty);
  const areAllTasksDone = useSelector(selectAreAllTasksDone);

  const dispatch = useDispatch();

  const openConfirm = () => {
    AlertConfirm({
      title: "Are you sure?",
      desc: "You will dalete all tasks!",
      onOk: () => {
        dispatch(clearAll());
      },
    });
  };

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
          <Button onClick={() => openConfirm()}>Clear all</Button>
        </>
      )}
    </ListButtons>
  );
};

export default Buttons;
