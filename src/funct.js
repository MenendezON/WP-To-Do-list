import { dataLoading } from "./index.js";

export let tasks = JSON.parse(localStorage.getItem('datas'));

export const validateForm = (event) => {
  event.preventDefault();
  const task = document.getElementById('newTask');
  if (task && task.value !== '') {
    const newTask = {
      index: tasks.length,
      completed: false,
      description: task && task.value
    };
    task.value = '';

    tasks.push(newTask);
    localStorage.setItem('datas', JSON.stringify(tasks));

    dataLoading();
    return false;
  }
  return true;
};

export const removeTask = (i) => {
  tasks = tasks.filter((task) => task.description !== tasks[i].description);
  localStorage.setItem('datas', JSON.stringify(tasks));
};
