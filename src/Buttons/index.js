import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="list__buttons">
    {tasks.length !== 0 && (
      <>
        <button className="list__button">
          {hideDoneTasks ? "Show" : "Hide"} completed
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
