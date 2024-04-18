// Dashboard.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask, changePage, changeItemsPerPage } from '../../ReduxStore/tasksActions';
import TaskManagement from '../TaskForm/TaskManager';
import TaskList from '../TaskList/tasklist';
import EditTaskPopup from '../TaskEdit/EditTaskPopup';
import './dashboard.css';
import Header from '../header/header';
import PaginationComponent from '../Pagination';

const Dashboard = ({ tasks, currentPage, itemsPerPage, addTask, deleteTask, updateTask, changePage, changeItemsPerPage }) => {
  const location = useLocation();
  const navigate = useNavigate();
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
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <Header username={username} onLogout={handleLogout} />
      <div className="task-management">
        <TaskManagement addTask={addTask} />
      </div>
      <div className="task-list">
        <TaskList tasks={tasks} currentPage={currentPage} itemsPerPage={itemsPerPage} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
      </div>
      {showEditPopup && <EditTaskPopup task={editedTask} onUpdate={handleUpdateTask} onClose={() => setShowEditPopup(false)} />}
      <PaginationComponent />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  currentPage: state.tasks.currentPage,
  itemsPerPage: state.tasks.itemsPerPage
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  updateTask,
  changePage,
  changeItemsPerPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
