import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const TasksForm = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputElement = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
  };

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
