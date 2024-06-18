"use strict";
window.onload = function () {
  const selectCategory = document.querySelector("#selectCategory");
  const selectUser = document.querySelector("#selectUser");
  const prioritySelect = document.querySelector("#prioritySelect");
  
  function loadUser() {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((users) => {
        for (const user of users) {
          let userOption = new Option("option");

          userOption.value = user.id;
          userOption.innerText = user.name;

          selectUser.appendChild(userOption);
        }
      });
  }

  function loadCategory() {
    fetch("http://localhost:8083/api/categories")
      .then((response) => response.json())
      .then((categories) => {
        for (const category of categories) {
          let categoryOption = new Option("option");

          categoryOption.value = category.id;
          categoryOption.innerText = category.name;

          selectCategory.appendChild(categoryOption);
        }
      });
  }

  function loadPriority() {
    fetch("http://localhost:8083/api/todos")
      .then((response) => response.json())
      .then((todos) => {
        let newtodo = [];
      
        for (const todo of todos) {
          if(newtodo.indexOf(todo.priority) == -1) {
            newtodo.push(todo.priority)
          } 
        }
        console.log(newtodo)
        for (const todo of newtodo) {
          let priorityOption = new Option("option");

          priorityOption.innerText = todo

          prioritySelect.appendChild(priorityOption);
        }
      });
  }

  loadUser();
  loadCategory();
  loadPriority();
};
