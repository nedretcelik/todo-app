"use strict"
window.onload = function(){
const prioritySelect = document.querySelector("#prioritySelect")
function loadPriority() {
    fetch("http://localhost:8083/api/todos")
      .then((response) => response.json())
      .then((todos) => {
        for (const todo of todos) {
          let priorityOption = new Option("option");

         
        priorityOption.innerText = todo.priority;

        prioritySelect.appendChild(priorityOption);
        }
      });
  }

  loadPriority()
}