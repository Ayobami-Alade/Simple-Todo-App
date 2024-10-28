const inputTask = document.querySelector("#new-task");
const addTaskBtn = document.querySelector("#add-task-btn");
const filterAllBtn = document.querySelector("#filter-all");
const filterCompletedBtn = document.querySelector("#filter-completed");
const filterPendingBtn = document.querySelector("#filter-pending");
const taskList = document.querySelector("#task-list");
const editBtn = document.querySelector("#edit-task-list");
const clearBtn = document.querySelector("#clear-tasks-btn");
const taskListItem = document.querySelectorAll(".task-item");
const allFilterButtons = document.querySelectorAll(".filter-buttons button");

// Add Task Functionality
addTaskBtn.addEventListener("click", addTask);

inputTask.focus();

function addTask() {
  const taskText = inputTask.value.trim();

  if (taskText == "") {
    throw new Error("Please add task");
    return;
  }

  // Create textNode which should be equal to taskText
  const textNode = document.createTextNode(taskText);
  // console.log(textNode);

  // Append textNode in a span
  const texNodeSpan = document.createElement("span");
  texNodeSpan.appendChild(textNode);

  // Adding delete button functionality to each taskListItem(li)
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-task");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskListItem.remove();
    deleteButton.remove();
  };
  // Create taskListItem(li) and append  and delete button to it
  const taskListItem = document.createElement("li");
  taskListItem.classList.add("task-item");
  taskListItem.appendChild(texNodeSpan);
  taskListItem.appendChild(deleteButton);
  console.log(taskListItem);

  // Append taskListItem(li) and deleteButton to taskList(ul)
  taskList.appendChild(taskListItem);
  console.log(taskList);

  inputTask.value = "";
  inputTask.focus();
}

// Task completion functionality
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
    console.log(e.target.parentElement);
  }
});

// Clear all task functionality
clearBtn.addEventListener("click", function () {
  taskList.innerHTML = "";
});

// Filter task functionality
filterAllBtn.addEventListener("click", function () {
  filterAllBtn.classList.remove("active");
  filterCompletedBtn.classList.remove("active");
  filterPendingBtn.classList.remove("active");
  filterAllBtn.classList.add("active");
  const taskListItem = document.querySelectorAll(".task-item");
  console.log(taskListItem);
  taskListItem.forEach((task) => {
    task.style.display = "flex";
  });
});
filterCompletedBtn.addEventListener("click", function () {
  filterAllBtn.classList.remove("active");
  filterCompletedBtn.classList.remove("active");
  filterPendingBtn.classList.remove("active");
  filterCompletedBtn.classList.add("active");
  const taskListItem = document.querySelectorAll(".task-item");
  taskListItem.forEach((task) => {
    task.style.display = task.classList.contains("completed") ? "flex" : "none";
  });
});
filterPendingBtn.addEventListener("click", function () {
  filterAllBtn.classList.remove("active");
  filterCompletedBtn.classList.remove("active");
  filterPendingBtn.classList.remove("active");
  filterPendingBtn.classList.add("active");
  const taskListItem = document.querySelectorAll(".task-item");
  taskListItem.forEach((task) => {
    task.style.display = task.classList.contains("completed") ? "none" : "flex";
  });
});
