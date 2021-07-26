import "./taskItems.css";
import taskItems from "./taskItems.html";
import taskItemsDone from "./taskItemsDone.html";

export default {
  title: "Components/taskItems",
  parameters: { layout: "centered" },
};

export const regular = () => taskItems;
export const done = () => taskItemsDone;
