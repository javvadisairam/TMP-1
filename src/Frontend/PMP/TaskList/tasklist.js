// TaskList.js
import React from 'react';
import './tasklist.css';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  if (!tasks || tasks.length === 0) {
    return <div className="task-list">No tasks available</div>;
  }

  const handleDeleteTask = (taskId) => {
    onDeleteTask(taskId);
  };

  const handleEditTask = (task) => {
    onEditTask(task);
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.status}</td>
              <td>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
