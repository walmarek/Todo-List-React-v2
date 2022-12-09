import React, { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  const inputElement = useRef(null);

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputElement}
        value={newTaskContent}
        className="form__input"
        placeholder=" What's your new task?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button onClick={() => {inputElement.current.focus()}} className="form__button">
        Add task
      </button>
    </form>
  );
};

export default Form;
