let taskInput = document.querySelector("new-task");
let addButton = document.querySelector("#add-button");
let pendingTaskHolder = document.getElementById("pending-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

// move task from input to pending section
function addTask(event) {
	event.preventDefault();

	let input = document.getElementById("new-task").value;
	let newTaskInput = document.createElement("new-input");
	newTaskInput.className = "col-md-12 pending-section";
	newTaskInput.innerHTML = input;
	let completeButton = document.createElement("button");
	completeButton.className = "col-md-12";
	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Remove";
	deleteButton.className = "col-md-12";
	pendingTaskHolder.appendChild(completeButton);
	pendingTaskHolder.appendChild(newTaskInput);
	pendingTaskHolder.appendChild(deleteButton);
};

addButton.addEventListener("click", addTask);
completeButton.addEventListener("click", moveTask);
deleteButton.addEventListener("click", deleteTask);

// delete task from pending list if no longer needed
function deleteTask() {
	pendingTaskHolder.removeChild(completeButton);
	pendingTaskHolder.removeChild(newTaskInput);
	pendingTaskHolder.removeChild(deleteButton);
};

/*completeButton.addEventListener("click", moveTask);
deleteButton.addEventListener("click", deleteTask);*/

function moveTask() {
	let newTaskInputClone = newTaskInput.cloneNode(true);
	newTaskInputClone.className = "col-md-12 pending-section";
	let completeButtonClone = completeButton.cloneNode(true);
	completeButtonClone.className = "col-md-12";
	let deleteButtonClone = deleteButton.cloneNode(true);
	deleteButtonClone.className = "col-md-12";
	completedTasksHolder.appendChild(completeButtonClone);
	completedTasksHolder.appendChild(newTaskInputClone);
	completedTasksHolder.appendChild(deleteButtonClone);
	pendingTaskHolder.removeChild(completeButton);
	pendingTaskHolder.removeChild(newTaskInput);
	pendingTaskHolder.removeChild(deleteButton);
};

deleteButtonClone.addEventListener("click", deleteTaskClone);