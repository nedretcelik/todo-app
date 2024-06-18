"use strict";
window.onload = function () {
  const selectCategory = document.querySelector("#selectCategory");
  const selectUser = document.querySelector("#selectUser");
  const selectDescription = document.querySelector("#selectDescription");

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

//   function loadDescription() {
//     fetch("http://localhost:8083/api/description")
//       .then((response) => response.json())
//       .then((descriptions) => {
//         for (const description of descriptions) {
//           let descriptionOption = new Option("option");

//           descriptionOption.value = description.id;
//           descriptionOption.innerText = description.name;

//           selectDescription.appendChild(descriptionOption);
//         }
//       });
//   }
//   loadDescription();
  loadUser();
  loadCategory();
};
