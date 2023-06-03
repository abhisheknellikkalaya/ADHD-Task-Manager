document.getElementById('taskForm').addEventListener('submit', function(event) {
    // Prevent the form from being submitted normally (which would refresh the page).
    event.preventDefault();
  
    // Get the text the user typed into the form.
    var taskDescription = document.getElementById('taskInput').value;
  
    // Add the task to the list.
    addTask(taskDescription);
  
    // Clear the input box.
    document.getElementById('taskInput').value = '';
  });
  