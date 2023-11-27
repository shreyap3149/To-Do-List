// add task functionality
function addTask() {
    // get the input field and task list elements
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    // console.log('taskInputs value: ', taskInput.textContent);
    
    // check if input field is not empty or contains only whitespace
    if (taskInput.value.trim() != "") {
        // create a new list item
        let li = document.createElement("li");

        // add the task text to the list item
        li.appendChild(document.createTextNode(taskInput.value));
        
        // display the list item to the task list
        taskList.appendChild(li);

        // clear the input field
        taskInput.value = "";
    }
}





// delete task functionality
