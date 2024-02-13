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
    <div className="task-management-container">
      <h3 className='heading-add-task'>Please Add Your Task Here!</h3>
      <button className="add-task-button1" onClick={() => setShowPopup(true)}>Add Task</button>
      {showPopup && <TaskFormPopup onSubmit={handleSubmit} onClose={() => setShowPopup(false)} />}
      {/* Your task list rendering */}
    </div>
  );
};

export default TaskManagement;
