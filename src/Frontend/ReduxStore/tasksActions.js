// Define action types
import { v4 as uuidv4 } from 'uuid';
export const LOAD_DATA = 'LOAD_DATA'; 
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_ITEMS_PER_PAGE = 'CHANGE_ITEMS_PER_PAGE';

export const changePage = (pageNumber) => {
  return {
    type: CHANGE_PAGE,
    payload: pageNumber
  };
};

export const changeItemsPerPage = (itemsPerPage) => {
  return {
    type: CHANGE_ITEMS_PER_PAGE,
    payload: itemsPerPage
  };
};


// tasksActions.js
export const loadData = (jsonData) => {
  return {
    type: LOAD_DATA,
    payload: jsonData
  };
};


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
