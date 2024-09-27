// src/components/TopBar.js
import React from "react";
import "./TopBar.css"; // Add styling separately

const TopBar = () => {
  // Function to handle "New" button click
  const handleNewClick = () => {
    alert("New button clicked!"); // Example action, replace with your logic
  };

  return (
    <div className="topbar">
      <div className="project-info">
        <h1>Monthly Website Design</h1>
        <p>8 Members</p>
      </div>
      <div className="actions">
        <button className="btn">Add Member</button>
        <button className="btn grey" onClick={handleNewClick}>
          New
        </button>
      </div>
    </div>
  );
};

export default TopBar;
