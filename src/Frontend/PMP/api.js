// This is a mock API module
let taskId = 0;
const tasks = [];

export const getTasks = () => {
  return tasks;
};

export const addTask = (task) => {
  tasks.push({ ...task, id: ++taskId });
};
