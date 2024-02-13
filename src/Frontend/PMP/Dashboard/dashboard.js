import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../../ReduxStore/tasksActions';
import TaskManagement from '../TaskForm/TaskManager';
import TaskList from '../TaskList/tasklist';
import EditTaskPopup from '../TaskEdit/EditTaskPopup';
import './dashboard.css'; // Import your CSS file
import Header from '../header/header';

const Dashboard = ({ tasks, addTask, deleteTask, updateTask }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Get the navigate function
  const [username, setUsername] = useState('');
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const usernameParam = params.get('username');
    setUsername(usernameParam);
  }, [location.search]);

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setShowEditPopup(true);
  };

  const handleUpdateTask = (updatedTask) => {
    updateTask(updatedTask);
    setShowEditPopup(false);
    setEditedTask(null);
  };

  const handleLogout = () => {
    // Your logout logic here
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <div className="dashboard-container">
      <Header 
        username={username} 
        onLogout={handleLogout} 
      />
      <div className="task-management">
        <TaskManagement addTask={addTask} />
      </div>
      <div className="task-list">
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
      </div>
      {showEditPopup && <EditTaskPopup task={editedTask} onUpdate={handleUpdateTask} onClose={() => setShowEditPopup(false)} />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = {
  addTask,
  deleteTask,
  updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
