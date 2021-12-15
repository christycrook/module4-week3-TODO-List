let taskInput = document.querySelector("new-task");
let addButton = document.querySelector("#add-button");
let pendingTaskHolder = document.getElementById("pending-tasks");
let completedTasksHolder = document.getElementById("completed-tasks");

// move task from input to pending section
const addTask = (event) => {
	event.preventDefault();

	let input = document.getElementById("new-task").value;
	let newTaskInput = document.createElement("new-input");
	newTaskInput.className = "col-md-12 pending-section";
	newTaskInput.innerHTML = input;
	let completedButton = document.createElement("button");
	completedButton.className = "col-md-12";
	let deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.className = "col-md-12";
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

addButton.addEventListener("click", addTask);

// move task from pending section to completed section
const moveTask = () => {
	console.log("hello");
    let completedButtonClone = completedButton.cloneNode(true);
    completedButtonClone.className = "col-4 check-mark-clone complete-section";
    let taskInputClone = taskInput.cloneNode(true);
    taskInputClone.className = "col-4 new-input-clone complete-section";
    let deleteButtonClone = deleteButton.cloneNode(true);
    deleteButtonClone.className =
     "col-4 delete-button-clone complete-section"
	completedTasksHolder.appendChild(completedButtonClone);
	completedTasksHolder.appendChild(taskInputClone);
	completedTasksHolder.appendChild(deleteButtonClone);
	pendingTaskHolder.removeChild(completedButton);
	pendingTaskHolder.removeChild(taskInput);
	pendingTaskHolder.removeChild(deleteButton);
};

completedButton.addEventListener("click", moveTask);