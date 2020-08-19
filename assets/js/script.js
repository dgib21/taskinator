//displays HTML element as an object known as a DOM element 
//console.dir(window.document);

var formEl = document.querySelector("#task-form");

//logging the dom elemnt of the button 
//console.log(buttonEl);

//The following does this: 
//Create a new task item

//Style the new task item

//Add the text

//Append this element to the task list

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");
//let us dynamically create the tasks
var createTaskHandler = function(event) {

    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);

    console.log(event); 

  };

  formEl.addEventListener("submit", createTaskHandler);
