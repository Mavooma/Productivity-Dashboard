import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return <li className="task">{task}</li>; // Add the class here if needed
};

export default Task;
