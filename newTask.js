const form = document.querySelector(".addTaskForm");
const formSubmit = document.querySelector(".addTaskForm__submit");

form.onsubmit = function (event) {
  event.preventDefault();
  const checkedDateInput = document.querySelector(".addTaskForm__radio:checked")
    .value;
  const textInput = document.querySelector(".addTaskForm__textInput").value;

  console.log(checkedDateInput, textInput);
};
