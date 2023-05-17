const removeAllTask = () => {
  let tasks = JSON.parse(localStorage.getItem('datas'));

  tasks = tasks.filter((task) => !task.completed);

  /* eslint-disable no-plusplus */
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].index = i;
  }
  localStorage.setItem('datas', JSON.stringify(tasks));
};

export default removeAllTask;