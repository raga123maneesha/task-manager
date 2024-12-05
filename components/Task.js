// Task.js
class Task {
    constructor(id, name, time) {
      this.id = id;
      this.name = name;
      this.time = time;
    }
    
    updateTask(name, time) {
      this.name = name;
      this.time = time;
    }
    
    deleteTask() {
      return false;  // Logic for deleting task (if needed)
    }
  }
  
  export default Task;
  