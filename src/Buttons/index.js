import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="list__buttons">
    {tasks.length !== 0 && (
      <>
        <button onClick={toggleHideDone} className="list__button">
          {hideDone ? "Show" : "Hide"} completed
        </button>
        <button
          className="list__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Complete all
        </button>
      </>
    )}
  </div>
);

export default Buttons;
