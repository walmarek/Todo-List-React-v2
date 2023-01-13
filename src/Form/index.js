import { useState, useRef } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputElement = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent.trim());
      setNewTaskContent("");
    }
  };

  //other way to write the code
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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={inputElement}
        value={newTaskContent}
        className="form__input"
        placeholder=" What's your new task?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button
        onClick={() => {
          inputElement.current.focus();
        }}
        className="form__button"
      >
        Add task
      </button>
    </form>
  );
};

export default Form;
