// This is the list where you'll store your tasks.
let tasks = [];

// Add a task to the list.
function addTask(description) {
  tasks.push(description);
  // TODO: Update the UI to reflect the new task.
}

// Edit an existing task.
function editTask(index, newDescription) {
  tasks[index] = newDescription;
  // TODO: Update the UI to reflect the edited task.
}

// Delete a task from the list.
function deleteTask(index) {
  tasks.splice(index, 1);
  // TODO: Update the UI to reflect the deleted task.
}