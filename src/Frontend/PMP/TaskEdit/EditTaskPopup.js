import React, { useState, useEffect } from 'react';
import './EditTaskPopup.css';

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
    <div className="task-form-popup-overlay" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999 }}>
    <div className="task-form-popup-container" style={{ width: "100%", maxWidth: "400px" }}>
      <div className="task-form-popup" style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <button className="close-button" style={{ background: "none", border: "none", color: "#888", fontSize: "18px", cursor: "pointer", position: "absolute", top: "10px", right: "10px" }} onClick={onClose}>Close</button>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            placeholder="Enter task title..."
            required
            style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
            style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
            style={{ marginBottom: "10px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="input-group" style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="taskDeadline" style={{ marginRight: "10px" }}>Deadline:</label>
            <input
              id="taskDeadline"
              className="task-title-input"
              type="date"
              value={editedTask.deadline}
              onChange={handleChange}
              required
              style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            />
          </div>
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Update Task</button>
        </form>
      </div>
    </div>
  </div>
  
  );
};

export default EditTaskPopup;
