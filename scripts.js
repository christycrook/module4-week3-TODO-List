let taskInput = document.querySelector("new-task");
let addButton = document.querySelector("#add-button");
let pendingTaskHolder = document.getElementById("pending-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

// move task from input to pending section
function addTask(event) {
	event.preventDefault();

	let input = document.getElementById("new-task").value;
	let newTaskInput = document.createElement("taskInput");
	let completedButton = document.createElement("button");
	let deleteButton = document.createElement("button");
	
	newTaskInput.className = "col-md-12 pending-section";
	newTaskInput.innerHTML = input;
	
	completedButton.className = "completed-button";
	completedButton.textContent = "❏";
	completedButton.addEventListener("click", function() {
		completedButton.style.color = "red"
	})
	
	deleteButton.textContent = "Delete";
	deleteButton.className = "delete-button";
	
	pendingTaskHolder.appendChild(completedButton);
	pendingTaskHolder.appendChild(newTaskInput);
	pendingTaskHolder.appendChild(deleteButton);

	// delete task from pending section if no longer needed
	const deleteTask = () => {
		pendingTaskHolder.removeChild(completedButton);
		pendingTaskHolder.removeChild(newTaskInput);
		pendingTaskHolder.removeChild(deleteButton);
	};

	deleteButton.addEventListener("click", deleteTask);
};

addButton.addEventListener("click", addTask)

