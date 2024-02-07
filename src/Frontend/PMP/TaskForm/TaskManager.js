// TaskManagement.js
import React, { useState } from 'react';
import TaskFormPopup from './TaskFormPopup';
import "./TaskManagement.css"

const TaskManagement = ({ addTask }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (taskText) => {
    addTask(taskText);
    setShowPopup(false);
  };

  return (
    <div>
      <h2>Task Management</h2>
      <button onClick={() => setShowPopup(true)}>Add Task</button>
      {showPopup && <TaskFormPopup onSubmit={handleSubmit} onClose={() => setShowPopup(false)} />}
      {/* Your task list rendering */}
    </div>
  );
};

export default TaskManagement;
