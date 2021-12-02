let taskInput=document.getElementById("new-task");//Add a new task.
let addButton=document.getElementsByTagName("button")[0];//first button
let incompleteTaskHolder=document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
let completedTasksHolder=document.getElementById("completed-tasks");//completed-tasks

let createNewTaskElement=function(taskString){

	let listItem=document.createElement("li");

	//input (checkbox)
	let checkBox=document.createElement("input");//checkbx
	//label
	let label=document.createElement("label");//label
	//input (text)
	let editInput=document.createElement("input");//text
	

	//button.delete
	let deleteButton=document.createElement("button");//delete button

	label.innerText=taskString;

	//Each elements, needs appending
	checkBox.type="checkbox";
    deleteButton.type="button";
	deleteButton.innerText="delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
	return listItem;
}



let addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	let listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

//Delete task.
let deleteTask=function(){
	console.log("Delete Task...");

	let listItem=this.parentNode;
	let ul=listItem.parentNode;
    //Remove the parent list item from the ul.
	ul.removeChild(listItem);

}


//Mark task completed
let taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	let listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


let taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		let listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);




