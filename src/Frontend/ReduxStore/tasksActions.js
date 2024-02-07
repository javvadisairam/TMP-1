// Define action types
import { v4 as uuidv4 } from 'uuid';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';


// Define action creators
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      ...task,
      id: uuidv4() // Generate a UUID for the task ID
    }
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId
  };
};


export const updateTask = (updatedTask) => {
  return {
    type: UPDATE_TASK,
    payload: updatedTask
  };
};
