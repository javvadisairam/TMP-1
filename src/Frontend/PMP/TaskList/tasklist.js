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
            <th>Team</th>
            <th>Deadline</th>
            <th>creation Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td className="task-title">{task.title}</td>
              <td className={`priority-${task.priority.toLowerCase()}`}>{task.priority}</td>
              <td className={`status-${task.status.toLowerCase()}`}>{task.status}</td>
              <td>{task.team}</td>
              <td>{task.deadline}</td>
              <td>{task.creationDate}</td>
              <td>
                <button  className='edit-button' onClick={() => handleEditTask(task)}>Edit</button>
                <button className='delete-button' onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
