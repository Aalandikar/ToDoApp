let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value;   //userinput

    if (taskText !== '') {            //task is not null
        let taskItem = document.createElement('li'); //create list
        taskItem.innerHTML = `<span>${taskText}</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>`; //include task and delete button
        taskList.appendChild(taskItem); //task append
        taskInput.value = '';  //clear input
    } else {
        alert('Please enter a valid task!');
    }
}

function deleteTask(btn) {
    if (confirm('Are you sure you want to delete this task?')) {
        let taskItem = btn.parentNode;    //get list item to delete task
        taskList.removeChild(taskItem);   //delete task
    }
}







// // Get the task list element from the DOM by its ID
// let taskList = document.getElementById('taskList');

// // Function to add a new task to the task list
// function addTask() {
//     // Get the value of the input field where the user types their task
//     let taskText = taskInput.value;

//     // Check if the task input is not empty
//     if (taskText !== '') {
//         // Create a new list item element to represent the task
//         let taskItem = document.createElement('li');
//         // Set the inner HTML of the list item to include the task text and a delete button
//         taskItem.innerHTML = `<span>${taskText}</span><button class="delete-btn" onclick="deleteTask(this)">Delete</button>`;
//         // Append the new task item to the task list in the DOM
//         taskList.appendChild(taskItem);
//         // Clear the input field for the next task
//         taskInput.value = '';
//     } else {
//         // Alert the user to enter a valid task if the input field is empty
//         alert('Please enter a valid task!');
//     }
// }

// // Function to delete a task from the task list
// function deleteTask(btn) {
//     // Confirm with the user if they really want to delete the task
//     if (confirm('Are you sure you want to delete this task?')) {
//         // Get the parent list item element of the delete button
//         let taskItem = btn.parentNode;
//         // Remove the task item from the task list in the DOM
//         taskList.removeChild(taskItem);
//     }
// }
