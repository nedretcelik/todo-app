"use strict";

window.onload = function () {
  const userList = document.querySelector("#userList");
  const todosDetailDiv = document.querySelector("#todosDetailDiv");

  function loadUser() {
    fetch("http://localhost:8083/api/users")
      .then((response) => response.json())
      .then((users) => {
        for (const user of users) {
          let userOption = new Option("option");

          userOption.value = user.id;
          userOption.innerText = user.name;

          userList.appendChild(userOption);
        }
      });
  }

  function buildTodosCard() {
    fetch("http://localhost:8083/api/todos")
      .then((response) => response.json())
      .then((todos) => {
        console.log(todos);
        for (const todo of todos) {
          if (todo.userid == userList.value) {
            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card", "mt-5", "custom-card", "d-flex", "justify-content-center");
            todosDetailDiv.appendChild(cardDiv);

            let cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            cardDiv.appendChild(cardBody);

            let categoryName = document.createElement("h5");
            categoryName.innerText = todo.category;

            cardBody.appendChild(categoryName);

            let priority = document.createElement("p");
            priority.innerText = "Priority: " + todo.priority;

            cardBody.appendChild(priority);

            let description = document.createElement("p");
            description.innerText = "Task: " + todo.description;

            cardBody.appendChild(description);

            let deadline = document.createElement("p");
            deadline.innerText = "Deadline: " + todo.deadline;

            cardBody.appendChild(deadline);

            const doneButton = document.createElement("a");
            doneButton.classList.add("btn-round", "btn", "btn-outline-success","doneButton");
            doneButton.href = `done.html?todoid=${todo.id}`;
            const icon = document.createElement("i");
            icon.classList.add("bi", "bi-check", "big-icon");

            cardBody.appendChild(doneButton);
            doneButton.appendChild(icon);

            const deleteButton = document.createElement("a");
            deleteButton.classList.add("btn-round", "btn", "btn-outline-danger", "mx-3");
            deleteButton.href = `delete.html?todoid=${todo.id}`;
            const iconX = document.createElement("i");
            iconX.classList.add("bi", "bi-x", "big-icon");

            cardBody.appendChild(doneButton);
            deleteButton.appendChild(iconX);

            cardBody.appendChild(deleteButton);

            const editButton = document.createElement("a");
            editButton.classList.add("btn-round", "btn", "btn-outline-warning");
            editButton.innerText = "";
            const iconPencil = document.createElement("i");
            iconPencil.classList.add("bi", "bi-pencil");
            editButton.appendChild(iconPencil);
            cardBody.appendChild(editButton);




          }
        }
      });
  }

  loadUser();
  userList.onchange = buildTodosCard;
};
