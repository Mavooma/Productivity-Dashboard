import React, { useState } from "react";
import "./Dashboard.css";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="dashboard">
      <h1>Productivity Dashboard</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Dashboard;
