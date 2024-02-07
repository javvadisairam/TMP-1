import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from './tasksActions';



// Initial state
const initialState = {
  tasks: []
};

// Tasks reducer
const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
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
            return action.payload; // Update the task if the ID matches
          }
          return task;
        })
      };
    default:
      return state;
  }
};

export default tasksReducer;
