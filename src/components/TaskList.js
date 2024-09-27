import React from "react";
import "./TaskList.css";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
