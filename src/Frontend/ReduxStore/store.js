import { createStore } from 'redux';
import rootReducer from './index'; // Import your combined reducers
import { loadData } from './tasksActions'; // Import your action creator

// Import your JSON data
import jsonData from "../../backend/data/data.json"; // Adjust the path accordingly

const store = createStore(rootReducer);

store.dispatch(loadData(jsonData)); // Dispatch the action with JSON data

export default store;
