let taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  // Create new <li> with task and delete button
  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  input.value = "";
  saveTasks();
}

// Function to delete a task
function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

// Function to mark task as done/undone
function toggleDone(span) {
  span.classList.toggle("done");
  saveTasks();
}

// Save the current list to localStorage
function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

// Load tasks when page is opened
function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

window.onload = loadTasks;
