"use strict";

const deleteTodoButton = document.querySelector("#deleteTodoButton");

const urlParams = new URLSearchParams(location.search);
let id = -1;

window.onload = function () {
  if (urlParams.has("todoid") === true) {
    id = urlParams.get("todoid");
    loadTodos(id);
  }
  function loadTodos(id) {
    fetch(`http://localhost:8083/api/todos/${id}`)
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos)
      });
  }
};

function deleteTodo() {
  let requestInit = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch("http://localhost:8083/api/todos/" + id, requestInit)
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
    });
}

deleteTodoButton.onclick = deleteTodo;