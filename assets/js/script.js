var formEl = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#tasks-to-do");

var creatTaskHandler = function(event) {

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    event.preventDefault();

    // creat list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    taskToDoE1.appendChild(listItemEl)
}; 

//-------------------------------This is a call back
formEl.addEventListener("submit", creatTaskHandler);