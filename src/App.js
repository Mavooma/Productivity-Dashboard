// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import AddTask from "./components/AddTask"; // Import the AddTask component
import TopBar from "./components/TopBar";
import TaskBoard from "./components/TaskBoard";
import TaskList from "./components/TaskList"; // Import the TaskList component
import "./App.css"; // Global styling

function App() {
  const [tasks, setTasks] = React.useState([]); // State to hold tasks

  const addTask = (task) => {
    setTasks([...tasks, task]); // Function to add a new task
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <AddTask addTask={addTask} /> {/* Include AddTask component */}
        <TaskBoard /> {/* This could potentially display task cards */}
        <TaskList tasks={tasks} /> {/* Render TaskList with tasks */}
      </div>
    </div>
  );
}

export default App;
