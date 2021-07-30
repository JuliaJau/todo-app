import { parseJSONFromLocalStorage } from "/utils/localStorage.js";

const taskList = document.querySelector(".taskList");

const tasks = [
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
  {
    title: "Get groceries",
    date: "Tomorrow",
    isDone: true,
  },
];

const taskListItem = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItem);

function createTaskListItem(task) {
  const taskListItem = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  taskListItem.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  taskListItem.append(input, span);

  return taskListItem;
}
