// Tasks.js
import Task from './Task.js';

let tasks = [];
let editTaskId = null;

// Task display logic
const renderTasks = (tasks) => {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // Clear the existing list
  
  tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <div>
        <span>${task.name}</span>
        <br>
        <span class="time">${task.time}</span>
      </div>
      <div>
        <button class="edit-btn" data-id="${task.id}">Edit</button>
        <button class="delete-btn" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(taskItem);
  });
};

// Delete a task
const deleteTask = (id) => {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks(tasks);
  updateTaskDisplay(tasks);
};

// Edit a task
const editTask = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (task) {
    document.getElementById("taskInput").value = task.name;
    document.getElementById("dateTimeInput").value = task.time;
    editTaskId = id;
  }
};

// Update task count
const updateTaskDisplay = (tasks) => {
  const taskCount = document.getElementById("taskCount");
  taskCount.textContent = `Number of Tasks: ${tasks.length}`;
  const noTaskMessage = document.getElementById("noTask");
  noTaskMessage.style.display = tasks.length === 0 ? "block" : "none";
};

export { renderTasks, deleteTask, editTask, updateTaskDisplay };
