// Button.js
import { toggleTaskManager } from './Header.js';
import { deleteTask, editTask } from './Tasks.js';

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", toggleTaskManager);

const editButtons = document.querySelectorAll(".edit-btn");
const deleteButtons = document.querySelectorAll(".delete-btn");

editButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const taskId = e.target.getAttribute("data-id");
    editTask(taskId);
  });
});

deleteButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const taskId = e.target.getAttribute("data-id");
    deleteTask(taskId);
  });
});

export { closeButton };
