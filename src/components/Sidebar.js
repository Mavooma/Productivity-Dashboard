// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css"; // Add styling separately

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>DevDash</h2>
      <nav>
        <ul>
          <li>My Tasks</li>
          <li>Time Tracking</li>
          <li>Daily Planner</li>
          <li>Manage All Task</li>
        </ul>
        <h3>Team Workspace</h3>
        <ul>
          <li>Monthly Design Goals</li>
          <li>Project Milestones</li>
          <li>Motivational Tools</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
