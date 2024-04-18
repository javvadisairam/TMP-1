// tasksReducer.js

import { LOAD_DATA, ADD_TASK, DELETE_TASK, UPDATE_TASK, CHANGE_PAGE, CHANGE_ITEMS_PER_PAGE } from './tasksActions';

const initialState = {
  tasks: [],
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 0
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        tasks: action.payload,
        totalItems: action.payload.length
      };
    case CHANGE_PAGE:
      console.log('CHANGE_PAGE action triggered with payload:', action.payload);
      return {
        ...state,
        currentPage: action.payload
      };
    case CHANGE_ITEMS_PER_PAGE:
      console.log('CHANGE_ITEMS_PER_PAGE action triggered with payload:', action.payload);
      return {
        ...state,
        itemsPerPage: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        })
      };
    default:
      return state;
  }
};

export default tasksReducer;
