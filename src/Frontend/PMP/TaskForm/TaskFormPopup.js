// TaskFormPopup.js
import React, { useState } from 'react';
import './TaskFormPopup.css'; // Import your CSS file

const TaskFormPopup = ({ onSubmit, onClose }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');
  const [taskStatus, setTaskStatus] = useState('Todo');
  const [team, setTeam] = useState('');
  const [deadline, setDeadline] = useState('');

  // Team names
  const teamNames = [
    'Engineering Team',
    'Marketing Team',
    'Design Team',
    'Sales Team'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: taskTitle,
      priority: taskPriority,
      status: taskStatus,
      team: team,
      deadline: deadline,
      creationDate: new Date().toLocaleDateString() // Automatically generate creation date
    };
    onSubmit(newTask);
    setTaskTitle('');
    setTaskPriority('Low');
    setTaskStatus('Todo');
    setTeam('');
    setDeadline('');
  };

  return (
    <div className="task-form-popup-overlay">
      <div className="task-form-popup-container">
        <div className="task-form-popup">
          <button className="close-button" onClick={onClose}>Close</button>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="taskTitle">Task Title:</label>
              <input
                id="taskTitle"
                className="task-title-input"
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter task title..."
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="taskPriority">Priority:</label>
              <select
                id="taskPriority"
                className="task-priority-select"
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="taskStatus">Status:</label>
              <select
                id="taskStatus"
                className="task-status-select"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <option value="Todo">Todo</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            {/* Team name select */}
            <div className="input-group">
              <label htmlFor="taskTeam">Team:</label>
              <select
                id="taskTeam"
                className="task-team-select"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                required
              >
                <option value="" disabled>Select Team</option>
                {teamNames.map((teamName, index) => (
                  <option key={index} value={teamName}>{teamName}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="taskDeadline">Deadline:</label>
              <input
                id="taskDeadline"
                className="task-title-input"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="Enter deadline..."
                required
              />
            </div>
            <div className="button-container">
              <button className="add-task-button" type="submit">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskFormPopup;
