// src/components/TaskBoard.js
import React from "react";
import TaskCard from "./TaskCard"; // Each task card component
import "./TaskBoard.css"; // Add styling separately

const TaskBoard = () => {
  const tasks = [
    {
      title: "Creating Taskku Landing Page",
      status: "On List",
      type: "Wireframing",
    },
    {
      title: "Low-Fi Version Landing Page",
      status: "In Progress",
      type: "Web Development",
    },
    {
      title: "Creating New Landing Page",
      status: "On Review",
      type: "Web Design",
    },
    // Add more tasks here
  ];

  return (
    <div className="task-board">
      <div className="task-column">
        <h2>On List (1)</h2>
        <TaskCard title={tasks[0].title} type={tasks[0].type} />
      </div>
      <div className="task-column">
        <h2>In Progress (2)</h2>
        <TaskCard title={tasks[1].title} type={tasks[1].type} />
      </div>
      <div className="task-column">
        <h2>On Review (4)</h2>
        <TaskCard title={tasks[2].title} type={tasks[2].type} />
      </div>
    </div>
  );
};

export default TaskBoard;
