// TaskFormPopup.js
import React, { useState } from 'react';

const TaskFormPopup = ({ onSubmit, onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');
  const [taskStatus, setTaskStatus] = useState('Todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      priority: taskPriority,
      status: taskStatus
    };
    onSubmit(newTask);
    setTaskTitle('');
    setTaskPriority('Low');
    setTaskStatus('Todo');
  };

  return (
    <div className="task-form-popup-overlay">
      <div className="task-form-popup">
        <button className="close-button" onClick={onClose}>Close</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title..."
            required
          />
          <select
            value={taskPriority}
            onChange={(e) => setTaskPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskFormPopup;
