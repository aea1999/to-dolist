const toDoInput = document.querySelector("#todo-input");
const toDoList = document.querySelector(".to-do-list");
const form = document.querySelector("form");
let finished = [];
let uncomplete = [];
form.addEventListener("submit", addTask);

function addEvents() {
  let check = document.querySelectorAll(".check");
  let trash = document.querySelectorAll(".trash");
  check.forEach((button) => button.addEventListener("click", complete));
  trash.forEach((button) => button.addEventListener("click", remove));
}

function addTask(e) {
  e.preventDefault();
  let newTask = toDoInput.value;
  toDoList.innerHTML =
    `<div class='todo'><li>${newTask}</li><button class='check'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 22h-19v-19h19v2h-1v-1h-17v17h17v-9.502h1v10.502zm5-19.315l-14.966 15.872-5.558-6.557.762-.648 4.833 5.707 14.201-15.059.728.685z"/></svg></button><button class='trash'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z"/></svg></button></div>` +
    toDoList.innerHTML;
  this.reset();
  addEvents();
}
function complete() {
  let parent = this.parentNode;
  finished.push(parent);
  console.log(finished);
  parent.style.textDecoration = "line-through";
}
function remove() {
  let parent = this.parentNode;
  parent.parentNode.removeChild(parent);
}
