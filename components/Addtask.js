// AddTask.js
import { renderTasks, updateTaskDisplay } from './Tasks.js';

let tasks = [];
let editTaskId = null;

// Get references to the DOM elements
const taskInput = document.getElementById("taskInput");
const dateTimeInput = document.getElementById("dateTimeInput");
const saveTaskBtn = document.getElementById("saveTaskBtn");

// Add or edit a task
saveTaskBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  const taskTime = dateTimeInput.value.trim();

  if (!taskName || !taskTime) {
    alert("Please fill in both Task and Day & Time!");
    return;
  }

  if (editTaskId) {
    // Edit existing task
    tasks = tasks.map((task) =>
      task.id === editTaskId ? { ...task, name: taskName, time: taskTime } : task
    );
    editTaskId = null;
  } else {
    // Add new task
    const task = { id: Date.now(), name: taskName, time: taskTime };
    tasks.push(task);
  }

  taskInput.value = "";
  dateTimeInput.value = "";

  renderTasks(tasks);
  updateTaskDisplay(tasks);
});

export { tasks, editTaskId };
