import { useState, useRef } from "react";
import {Form, Input, Button} from  "./styled";

const TasksForm = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputElement = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  //other way to code
  //   const onFormSubmit = (e) => {
  //     e.preventDefault();

  //     const trimmedNewTaskContent = newTaskContent.trim();

  //     if (!trimmedNewTaskContent) {
  //       return;
  //     }
  // addNewTask(trimmedNewTaskContent);
  // setNewTaskContent("")
  //   }

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        ref={inputElement}
        value={newTaskContent}
      
        placeholder=" What's your new task?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button
        onClick={() => {
          inputElement.current.focus();
        }}
        className="form__button"
      >
        Add task
      </Button>
    </Form>
  );
};

export default TasksForm;
