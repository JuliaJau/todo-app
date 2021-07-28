const form = document.querySelector(".addTaskForm");

form.onsubmit = function (event) {
  // Prevent the default functionality of the submit event, which is reloading the page
  event.preventDefault();
  const checkedDateInput = document.querySelector(
    ".addTaskForm__radio:checked"
  );
  const textInput = document.querySelector(".addTaskForm__textInput");

  const selectedDate = checkedDateInput.value;
  const taskName = textInput.value;
  console.log(
    `Hi you entered "${selectedDate}" as date and "${taskName}" as description`
  );
};
