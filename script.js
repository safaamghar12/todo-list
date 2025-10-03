function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task) {
    const li = document.createElement("li");
    li.textContent = task;

    // li.onclick = () => li.remove(); // click = delete task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);

    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
}
