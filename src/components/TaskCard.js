// src/components/TaskCard.js
import React from "react";
import "./TaskCard.css"; // Add styling separately

const TaskCard = ({ title, type }) => {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>{type}</p>
      <div className="task-meta">
        <span>3</span> <span>1</span> <span>3</span>
      </div>
    </div>
  );
};

export default TaskCard;
