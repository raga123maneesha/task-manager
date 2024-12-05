// Header.js
const taskManager = document.getElementById("taskManager");

const toggleTaskManager = () => {
  taskManager.classList.toggle("hidden");
};

export { toggleTaskManager };
