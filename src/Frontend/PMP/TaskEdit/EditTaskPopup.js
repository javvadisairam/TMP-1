import React, { useState, useEffect } from 'react';

const EditTaskPopup = ({ task, onUpdate, onClose }) => {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task); // Set the initial task when component mounts
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(editedTask);
    onClose();
  };

  return (
    <div className="task-form-popup-overlay">
      <div className="task-form-popup">
        <button className="close-button" onClick={onClose}>Close</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            placeholder="Enter task title..."
            required
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskPopup;
