/* eslint-disable-next-line import/no-cycle */
import dataLoading from './index.js';

const tasks = JSON.parse(localStorage.getItem('datas')) ?? [];
const validateForm = (event) => {
  event.preventDefault();
  const task = document.getElementById('newTask');
  const taskLength = tasks.length;
  if (task && task.value !== '') {
    const newTask = {
      index: taskLength,
      completed: false,
      description: task && task.value,
    };
    task.value = '';

    tasks.push(newTask);
    localStorage.setItem('datas', JSON.stringify(tasks));

    dataLoading();

    return false;
  }
  return true;
};

export default validateForm;