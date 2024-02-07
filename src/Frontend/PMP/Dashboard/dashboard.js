import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTask, deleteTask,updateTask } from '../../ReduxStore/tasksActions';
import TaskManagement from '../TaskForm/TaskManager';
import TaskList from '../TaskList/tasklist';
import EditTaskPopup from '../TaskEdit/EditTaskPopup';

const TaskManager = ({ tasks, addTask, deleteTask, updateTask }) => {
  const location = useLocation();
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

  return (
    <div>
      <p>{username} </p>
      <h2>Task Manager</h2>
      <div>
        <TaskManagement addTask={addTask} />
      </div>
      <ul>
        <TaskList onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} tasks={tasks}/>
      </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
