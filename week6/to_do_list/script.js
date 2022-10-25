function getNewTask() {
  let input = document.querySelector("input");
  let newTask = input.value;
  return newTask;
}
let tasks = document.querySelector("#tasks");

function createTask(params) {
  const p = document.createElement("p");
  const update = document.createElement("button");
  p.innerText = getNewTask();
}
