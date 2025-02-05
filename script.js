// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    // Ensure the task is not empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };
     // Append the delete button to the list item
     li.appendChild(deleteBtn);

     // Append the new task to the task list
     document.getElementById("task-list").appendChild(li);
 
     // Clear the input field after adding the task
     taskInput.value = "";
 }
 
